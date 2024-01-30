import { Box } from '@mui/material';
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';

import {
  getAgencyChartData,
  getAgencyDatasets,
  getAgentChartData,
  getAgentDatasets,
} from '@/utils/data/chart';

import * as S from '../../styles';
import type { StatisticsSectionProps } from '../../types';
import { ProfileSectionTitle } from '../SectionTitle';
import { ChartContainer } from './styles';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type ExternalTooltipContext = {
  chart: ChartJSProps;
  tooltip: any;
};

interface ChartJSProps extends ChartJS {
  cavnas: any;
}

const getOrCreateTooltip = (chart: ChartJSProps) => {
  if (!chart.canvas.parentNode) return null;
  let tooltipEl = chart.canvas.parentNode.querySelector('div');

  if (!tooltipEl) {
    tooltipEl = document.createElement('div');
    tooltipEl.style.cssText = `
      background: rgba(0, 0, 0, 0.7);
      border-radius: 3px;
      color: white;
      opacity: 1;
      pointer-events: none;
      position: absolute;
      transform: translate(-50%, 0);
      transition: all .1s ease;
      z-index: 9999;
    `;
    tooltipEl.appendChild(document.createElement('table'));
    chart.canvas.parentNode.appendChild(tooltipEl);
  }

  return tooltipEl;
};

const externalTooltipHandler = (context: ExternalTooltipContext) => {
  // Tooltip Element
  const { chart, tooltip } = context;

  const tooltipEl = getOrCreateTooltip(chart);

  if (!tooltipEl) return;

  // Hide if no tooltip
  if (tooltip.opacity === 0) {
    tooltipEl.style.opacity = '0';
    return;
  }

  // Set Text
  if (tooltip.body) {
    const tableHead = document.createElement('thead');

    const row = document.createElement('tr');
    row.style.borderWidth = '0';
    const th = document.createElement('th');
    th.style.borderWidth = '0';

    const text = document.createTextNode('Click to View Deal');

    th.appendChild(text);
    row.appendChild(th);
    tableHead.appendChild(row);

    const tableBody = document.createElement('tbody');

    const colors = tooltip.labelColors[0];
    const span = document.createElement('span');
    span.style.background = colors.backgroundColor;
    span.style.borderColor = colors.borderColor;
    span.style.borderWidth = '2px';
    span.style.marginRight = '10px';
    span.style.height = '10px';
    span.style.width = '10px';
    span.style.display = 'inline-block';

    const tr = document.createElement('tr');
    tr.style.backgroundColor = 'inherit';
    tr.style.borderWidth = '0';

    const td = document.createElement('td');
    td.style.borderWidth = '0';

    tr.appendChild(td);

    const imageUrl = context.tooltip.dataPoints[0].raw.mainImage;

    // Create a new table row
    const contentTr = document.createElement('tr');
    contentTr.style.backgroundColor = 'inherit';
    contentTr.style.borderWidth = '0';

    const pattern = /(jpg|jpeg|png|gif|bmp)$/i;

    if (imageUrl && pattern.test(imageUrl)) {
      const image = document.createElement('img');
      image.style.width = '150px';
      image.src = imageUrl;
      contentTr.appendChild(image);
    } else {
      const noImageTd = document.createElement('td');
      noImageTd.style.borderWidth = '0';
      const emptyDiv = document.createElement('div');
      emptyDiv.style.width = '150px';
      emptyDiv.style.height = '20px';
      const noImageText = document.createTextNode('No Image Available');
      emptyDiv.appendChild(noImageText);
      noImageTd.appendChild(emptyDiv);
      contentTr.appendChild(noImageTd);
    }

    tableBody.appendChild(contentTr);

    const tableRoot = tooltipEl.querySelector('table');

    // Remove old children
    if (tableRoot && tableRoot.firstChild) {
      while (tableRoot.firstChild) {
        tableRoot.firstChild.remove();
      }
    }

    // Add new children
    if (!tableRoot) return;
    tableRoot.appendChild(tableHead);
    tableRoot.appendChild(tableBody);
  }

  const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

  const adjustedTop = positionY + tooltip.caretY - tooltip.height - 200; // 10px offset from the point
  const topEdgeOffset = 20; // Minimum distance from the top edge
  const tooltipTop =
    adjustedTop < topEdgeOffset ? positionY + tooltip.caretY + 10 : adjustedTop;

  // Display, position, and set styles for font
  tooltipEl.style.opacity = '1';
  tooltipEl.style.left = `${positionX + tooltip.caretX}px`;
  tooltipEl.style.top = `${tooltipTop}px`;
  tooltipEl.style.font = tooltip.options.bodyFont.string;
  tooltipEl.style.padding = `${tooltip.options.padding}px ${tooltip.options.padding}px`;
};

export const AgentProfileStatistics: React.FC<StatisticsSectionProps> = ({
  deals,
}) => {
  const router = useRouter();

  const chartRef = useRef<any>(null);

  const { dataMapper, xAxis } = getAgentChartData(deals);
  const datasets = getAgentDatasets(dataMapper);

  const data = {
    labels: xAxis,
    datasets,
  };

  const options = {
    responsive: true,
    onClick: (
      e: any,
      activeElements: { datasetIndex: number; index: number }[]
    ) => {
      const nativeEvent = e.native; // Access the native event object

      if (activeElements.length > 0 && activeElements[0]) {
        const chartElement = activeElements[0];
        const dataIndex = chartElement.index;
        const { datasetIndex } = chartElement;

        const dataset = data.datasets[datasetIndex];
        const clickedData = dataset?.data[dataIndex] as Axis | undefined;

        if (clickedData) {
          const feed = clickedData?.feed?.toLowerCase() || 'new-york';
          const transactionType = clickedData?.transactionType?.toLowerCase();
          const slug = clickedData?.slug?.toLowerCase();

          if (transactionType && slug) {
            const link = `/property/${feed}/${transactionType}/${slug}/`;

            if (nativeEvent.ctrlKey || nativeEvent.metaKey) {
              // Open link in a new tab if ctrlKey (Windows) or metaKey (Mac) is pressed
              window.open(link, '_blank');
            } else {
              // Navigate to the link in the current tab
              router.push(link);
            }
          }
        }
      }
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
      },
    },
    interaction: {
      mode: 'nearest' as const,
      intersect: false,
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        enabled: false,
        position: 'nearest' as const,
        external: externalTooltipHandler,
        yAlign: 'top' as const,
      },
    },
  };

  return (
    <S.ProfileSectionContainer>
      <ProfileSectionTitle sectionName="Stats" />
      <ChartContainer>
        <Line options={options} data={data as any} ref={chartRef} />
      </ChartContainer>
    </S.ProfileSectionContainer>
  );
};

const GraphTooltip = ({ data: _data, position, visibility: _visible }: any) => {
  const calculateTop = ({ height }: any) => {
    let { top } = position;
    if (position.width && position.height) {
      if (top > height / 2) top -= 150;
      // if (left < position.width / 2 - 50) {
      //   if (!(left < 50)) left -= 50;
      // }
    }

    return { top };
  };

  calculateTop(position);
  return (
    <div
      style={{
        padding: '10px 0px',
        position: 'absolute',
        top: position.top,
        left: position?.left,
        visibility: _visible ? 'visible' : 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'white',
        }}
      >
        <p>View</p>
        <Image
          src="/assets/broker-profile-image.png"
          width={100}
          height={100}
          alt="test"
        />
      </Box>
    </div>
  );
};

export const ProfileStatistics: React.FC<StatisticsSectionProps> = ({
  agencyChartData,
  toolTip = false,
}) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipData, setTooltipData] = useState<any>(null);
  const [tooltipPos, setTooltipPos] = useState<any>(null);

  const chartRef = useRef<any>(null);

  const customTooltip = (context: any) => {
    if (toolTip) {
      if (context.tooltip.opacity === 0) {
        setTooltipVisible(false);
        return;
      }

      const chart = chartRef.current;
      if (chart) {
        const { canvas } = chart;
        if (canvas) {
          // enable tooltip visibilty
          setTooltipVisible(true);

          // set position of tooltip
          const left = context.tooltip.x;
          const top = context.tooltip.y;

          // handle tooltip multiple rerender
          if (tooltipPos?.top !== top) {
            setTooltipPos({
              top,
              left,
              width: chartRef?.current?.width,
              height: chartRef?.current?.height,
            });
            setTooltipData(context.tooltip);
          }
        }
      }
    }
  };

  const { dataMapper, xAxis } = getAgencyChartData({
    agencyChartData,
    type: 'agency',
  });
  const datasets = getAgencyDatasets(dataMapper);

  const data = {
    labels: xAxis,
    datasets,
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        grid: {
          display: false,
        },
      },
    },
    interaction: {
      mode: 'point' as const,
      intersect: false,
    },
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: false,
      },
      tooltip: {
        enabled: !toolTip,
        position: 'nearest' as const,
        external: customTooltip,
      },
    },
  };

  return (
    <S.ProfileSectionContainer>
      <ProfileSectionTitle sectionName="Stats" />
      <ChartContainer>
        <Line options={options} data={data as any} ref={chartRef} />

        {tooltipPos && toolTip && (
          <GraphTooltip
            data={tooltipData}
            position={tooltipPos}
            visibility={tooltipVisible}
          />
        )}
      </ChartContainer>
    </S.ProfileSectionContainer>
  );
};
