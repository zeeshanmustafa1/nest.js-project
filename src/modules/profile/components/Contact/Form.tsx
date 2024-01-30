import { ArrowForward, PhoneEnabled } from '@mui/icons-material';
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  ListItemText,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import __ from 'lodash';
import Link from 'next/link';
import { useReCaptcha } from 'next-recaptcha-v3';
import { useEffect, useReducer, useState } from 'react';

import { defaultMessageValue, userRoleSelectValues } from '@/constants/profile';
import { emailRegex } from '@/constants/regex';
import { Input } from '@/modules/common/components';

import * as S from './styles';
import type {
  ContactFormProps,
  FormFields,
  FormReducerAction,
  FormReducerState,
  UserRoles,
} from './types';

const formReducer: React.Reducer<FormReducerState, FormReducerAction> = (
  formState,
  action
) => {
  const prevValues = formState;

  return {
    ...prevValues,
    [action.field]: {
      value:
        action.value !== undefined
          ? action.value
          : prevValues[action.field].value,
      error: action.error,
    },
  };
};

const initialFormValues: FormReducerState = {
  name: {
    value: '',
    error: '',
  },
  phone: {
    value: '',
    error: '',
  },
  email: {
    value: '',
    error: '',
  },
  message: {
    value: '',
    error: '',
  },
};

export const ContactForm = ({
  contactPhone,
  contactBroker,
  deal,
}: ContactFormProps) => {
  const brokers =
    deal?.profiles || (contactBroker ? [contactBroker] : undefined);

  const [success, setSuccess] = useState(false);
  const [userRole, setUserRole] = useState<UserRoles>('agent');
  const [selectedBrokers, setSelectedBrokers] = useState<string[]>([]);
  const [selectedBrokerNames, setSelectedBrokerNames] = useState<string[]>([]);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const { executeRecaptcha } = useReCaptcha();

  // Check if there's only one broker. If true, set the selected broker accordingly.
  useEffect(() => {
    if (brokers && brokers[0] && brokers.length === 1) {
      setSelectedBrokers([brokers[0].slug as string]);
      setSelectedBrokerNames([brokers[0].name]);
    }
  }, [brokers]);

  const [formStates, dispatchFormChange] = useReducer(
    formReducer,
    initialFormValues
  );

  if (!brokers) return null;

  const handleTermsAgreementChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTermsAgreed(event.target.checked);
  };

  const handleChangeBrokers = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    const selectedValues = event.target.value as string[];
    setSelectedBrokers(selectedValues);

    // Set the selected broker names based on the selected values
    setSelectedBrokerNames(
      brokers
        .filter((broker) => selectedValues.includes(broker.slug as string))
        .map((broker) => broker.name)
    );
  };

  const onSelectRole = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setUserRole(e.target.value as UserRoles);
  };

  const onChangeForm = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    dispatchFormChange({ field: name as FormFields, value });
  };

  const onSubmitForm = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = await executeRecaptcha('form_submit');

    let hasError = false;

    Object.entries(formStates).forEach(([key, { value }]) => {
      if (!value) {
        dispatchFormChange({
          field: key as FormFields,
          value,
          error: `${__.startCase(key)} is required`,
        });
        hasError = true;
      }

      if (key === 'email' && !emailRegex.test(value)) {
        dispatchFormChange({
          field: 'email',
          value,
          error: 'Email has invalid format',
        });
        hasError = true;
      }
    });

    // Check if the broker slug array is empty
    if (selectedBrokers.length === 0) {
      window.alert('Please select a broker.');
      hasError = true;
      return;
    }

    if (hasError) {
      window.alert('could not send message: one or more fields are invalid');
      return;
    }

    if (!termsAgreed) {
      window.alert('Please agree to the Terms of Service.');
      hasError = true;
      return;
    }

    // Prepare form data
    const { name, phone, email, message } = formStates;
    const about = userRole;

    // Send mutation
    try {
      const response = await fetch('/api/sendMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.value,
          phone: phone.value,
          email: email.value,
          message: message.value,
          about,
          brokerSlugs: selectedBrokers,
          dealSlug: deal?.slug,
          token,
        }),
      });

      if (response.ok) {
        window.alert('Sent!');
        setSuccess(true);
      } else {
        const data = await response.json();
        window.alert(`Message Failed: ${data?.errorMessage}`);
      }
    } catch (error: any) {
      window.alert(`Could not send message: ${error.message}`);
    }
  };

  return (
    <S.Form onSubmit={onSubmitForm} about="Contact">
      {!success && (
        <>
          {brokers.length > 1 && (
            <>
              <TextField
                select
                SelectProps={{
                  multiple: true,
                  renderValue: () => selectedBrokerNames.join(', '),
                }}
                label="Select Brokers"
                variant="outlined"
                name="brokers"
                value={selectedBrokers}
                onChange={handleChangeBrokers}
              >
                {brokers.map((broker) => (
                  <MenuItem
                    key={broker.slug as string}
                    value={broker.slug as string}
                  >
                    <Checkbox
                      size="small"
                      color="info"
                      checked={selectedBrokers.includes(broker.slug as string)}
                    />
                    <ListItemText
                      primary={broker.name}
                      primaryTypographyProps={{ fontSize: 12, fontWeight: 600 }}
                    />
                  </MenuItem>
                ))}
              </TextField>
            </>
          )}
          <Input
            label="Name"
            placeholder="Your name"
            type="text"
            name="name"
            onChange={onChangeForm}
            value={formStates.name.value}
            error={formStates.name.error}
            errorMessage={formStates.name.error}
            inputProps={{
              maxLength: '30',
            }}
          />
          <Input
            label="Phone"
            type="phone"
            name="phone"
            onChange={onChangeForm}
            value={formStates.phone.value}
            error={formStates.phone.error}
            placeholder="XXX-XXX-XXXX"
            errorMessage={formStates.phone.error}
            inputProps={{
              maxLength: '12',
            }}
          />
          <Input
            label="Email"
            type="email"
            name="email"
            onChange={onChangeForm}
            value={formStates.email.value}
            error={formStates.email.error}
            errorMessage={formStates.email.error}
            inputProps={{
              maxLength: '40',
            }}
          />
          <Input
            type="text"
            label="Message"
            name="message"
            multiline
            rows={6}
            onChange={onChangeForm}
            value={formStates.message.value}
            error={formStates.message.error}
            placeholder={defaultMessageValue}
            errorMessage={formStates.message.error}
          />
          <TextField
            select
            label="About you"
            value={userRole}
            onChange={onSelectRole}
          >
            {userRoleSelectValues.map(({ label, type }) => (
              <MenuItem key={type} value={type}>
                {label}
              </MenuItem>
            ))}
          </TextField>
          <FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  checked={termsAgreed}
                  onChange={handleTermsAgreementChange}
                  color="primary"
                  required
                />
              }
              label={
                <span>
                  I agree to the{' '}
                  <Link href="/terms-and-conditions/" passHref>
                    <a target="_blank">Terms of Service</a>
                  </Link>
                </span>
              }
            />
          </FormControl>
        </>
      )}

      <S.FormButtonsWrapper>
        {(!success && (
          <Button
            variant="neon-green"
            type="submit"
            aria-label="Click to send message to broker"
            disableRipple
          >
            Send <ArrowForward fontSize="small" />
          </Button>
        )) || (
          <Typography color="textPrimary">
            Message Successfully Sent!
          </Typography>
        )}

        <Button
          variant="contained"
          color="secondary"
          disableElevation
          disableRipple
          href={`tel: ${contactPhone || ''}`}
          aria-label="Click to call broker directly"
        >
          Call <PhoneEnabled fontSize="small" />
        </Button>
      </S.FormButtonsWrapper>
    </S.Form>
  );
};
