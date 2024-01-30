import type { Broker, Deal } from '@/__generated__/types.d';

export type UserRoles = 'investor' | 'tenant' | 'agent' | 'other';

export type FormFields = 'name' | 'phone' | 'email' | 'message';
export type FormFieldValue = {
  value: string;
  error: string;
};

export type FormReducerAction = {
  field: FormFields;
  value?: string;
  error?: string;
};

export type FormReducerState = Record<FormFields, FormFieldValue>;

export type ContactFormProps = {
  contactPhone: string | undefined | null;
  contactBroker: Broker | undefined | null;
  deal: Deal | undefined | null;
};
