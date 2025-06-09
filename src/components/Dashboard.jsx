import React from 'react';
import './Dashboard.css';
import { FaDollarSign, FaArrowUp } from 'react-icons/fa';
import { TrendingUp, Icon, TrendingDown, Calendar, FileText, ThumbsUp } from 'lucide-react';
import { dollarSignCircle } from '@lucide/lab';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
const trafficData = [
  { label: 'Direct', value: 80, color: '#3f51b5' },
  { label: 'Social', value: 50, color: '#37474f' },
  { label: 'Referral', value: 20, color: '#3f51b5' },
  { label: 'Bounce', value: 60, color: '#37474f' },
  { label: 'Internet', value: 40, color: '#3f51b5' },
];

const Dashboard = () => {
  return (

    <div className="dashboard-container">
      <div className="earnings-card">
        <div className="top-section">
          <div>
            <h2 className="amount orange">$30200</h2>
            <p className="label">All Earnings</p>
          </div>
          <Icon iconNode={dollarSignCircle} className="money-icon orange" />
        </div>
        <div className="bottom-section bgorange ">
          <p>10% changes on profit</p>
          <TrendingUp />
        </div>
      </div>
      <div className="earnings-card">
        <div className="top-section">
          <div>
            <h2 className="amount redx">145</h2>
            <p className="label">Task</p>
          </div>
          <Calendar className='redx' />
        </div>
        <div className="bottom-section bgred">
          <p>28% task performance</p>
          <TrendingDown />
        </div>
      </div>
      <div className="earnings-card">
        <div className="top-section">
          <div>
            <h2 className="amount green">290+</h2>
            <p className="label">page Views</p>
          </div>
          <FileText className='green' />
        </div>
        <div className="bottom-section bggreen">
          <p>10k daily views</p>
          <TrendingUp />
        </div>
      </div>
      <div className="earnings-card">
        <div className="top-section">
          <div>
            <h2 className="amount blue">500 </h2>
            <p className="label">Downloads</p>
          </div>
          <ThumbsUp className='blue' />
        </div>
        <div className="bottom-section bgblue">
          <p>1k download in App Store</p>
          <TrendingUp />
        </div>
      </div>


      <div className="sales-card">
        <div className="sales-card-header">
          <div className="sales-card-header-top">
            <span>Sales Per Day</span>
            <div className="trend-info">
              <TrendingDown size={16} />
              <span>3%</span>
            </div>
          </div>
          <div className="chart-container">
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[{ data: [2, 5.5, 2, 8.5, 1.5, 5], color: '#ffffff' }]}

              height={130}
            // sx={{ background: 'transparent' }} 
            />
          </div>
        </div>

        <div className="sales-card-footer">
          <div className="footer-item">
            <p className="amount">$4230</p>
            <p className="label">Total Revenue</p>
          </div>
          <div className="footer-item">
            <p className="amount">321</p>
            <p className="label">Today Sales</p>
          </div>
        </div>

        <div className="sales-sub-footer">
          <div className="footer-item">
            <p className="label">REALTY</p>
            <p className="amount text-red">-0.99</p>
          </div>
          <div className="footer-item">
            <p className="label">INFRA</p>
            <p className="amount text-green">-7.66</p>
          </div>
        </div>
      </div>
      <div className="revenue-card">
        <h3 className="card-title">Total Revenue</h3>
        <div className="chart-container">
          <PieChart
            series={[
              {
                innerRadius: 40,
                outerRadius: 80,
                data: [
                  { id: 0, value: 10, label: 'Youtube', color: '#f44336' },
                  { id: 1, value: 15, label: 'Facebook', color: '#3f51b5' },
                  { id: 2, value: 20, label: 'Twitter', color: '#00bcd4' },
                ],
              },
            ]}
            width={260}
            height={260}
          />
        </div>

        <div className="legend">
          <div className="legend-item"><span className="dot red"></span>Youtube</div>
          <div className="legend-item"><span className="dot blue"></span>Facebook</div>
          <div className="legend-item"><span className="dot teal"></span>Twitter</div>
        </div>

        <div className="revenue-details">
          <div>
            <p className="label">Youtube</p>
            <p className="value bluey">+ 16.85%</p>
          </div>
          <div>
            <p className="label">Facebook</p>
            <p className="value green">+45.36%</p>
          </div>
          <div>
            <p className="label">Twitter</p>
            <p className="value orange">- 50.69%</p>
          </div>
        </div>
      </div>
      <div className="traffic-card">
        <h3 className="card-title">Traffic Sources</h3>
        <div className="progress-wrapper">
          {trafficData.map((item, idx) => (
            <div className="progress-group" key={idx}>
              <div className="progress-label">
                {item.label} <span>{item.value}%</span>
              </div>
              <div className="progress-bar-bg">
                <div
                  className="progress-bar-fill"
                  style={{
                    width: `${item.value}%`,
                    backgroundColor: item.color,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
