"use client";
import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Card,
  Col,
  Row,
  Avatar,
  Table,
  Button,
} from "antd";
import ReactSpeedometer from "react-d3-speedometer";
import { Line, Bar } from "react-chartjs-2";

// واردات و ثبت مقیاس‌ها برای نمودارهای خطی و ستونی
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const { Header, Content, Footer, Sider } = Layout;

const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const data1 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Dataset 1",
        data: [65, 59, 80, 81, 56],
        fill: true,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.4, // موجدار بودن خط
      },
    ],
  };

  const data2 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Dataset 2",
        data: [28, 48, 40, 19, 86],
        fill: false,
        borderColor: "rgba(255,99,132,1)",
      },
    ],
  };

  const barData1 = {
    labels: ["A", "B", "C", "D"],
    datasets: [
      {
        label: "Bar Dataset 1",
        data: [15, 25, 30, 40],
        backgroundColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const barData2 = {
    labels: ["E", "F", "G", "H"],
    datasets: [
      {
        label: "Bar Dataset 2",
        data: [10, 40, 50, 30],
        backgroundColor: "rgba(255,99,132,1)",
      },
    ],
  };

  const lineData1 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Line Dataset 3",
        data: [50, 60, 70, 80, 90],
        fill: false,
        borderColor: "rgba(54,162,235,1)",
        tension: 0.4,
      },
    ],
  };

  const userMessages = [
    {
      key: "1",
      user: (
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREOme6vZXapI-HTNJXRwstlO_vjjF59Wt6cQ&s" />
      ),
      message: "Hey, how are you?",
    },
    {
      key: "2",
      user: (
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Hb5xzFZJCTW4cMqmPwsgfw-gILUV7QevvQ&s" />
      ),
      message: "Can you help me with the project?",
    },
    {
      key: "3",
      user: (
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg4LAqlO0MWJt_12uP6ZCMTv5zqEpWtY9aSw&s" />
      ),
      message: "I need your feedback on the design.",
    },
  ];

  const columns = [
    {
      title: "User",
      dataIndex: "user",
      key: "user",
      render: (text) => <div>{text}</div>,
    },
    {
      title: "Message",
      dataIndex: "message",
      key: "message",
    },
  ];

  return (
    <Layout dir="ltr">
      {/* Header */}
      <Header
        style={{ display: "flex", alignItems: "center", padding: "0 20px" }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
          style={{ flex: 1, minWidth: 0 }}
        />
        {/* دکمه "Create a new request" به سمت راست هدر */}
        <Button type="primary" style={{ marginLeft: "auto" }}>
          Create a new request
        </Button>
      </Header>

      {/* Main Content */}
      <Content style={{ padding: "0 48px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        </Breadcrumb>

        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider
            style={{ background: colorBgContainer }}
            width={200}
            breakpoint="lg"
            collapsedWidth="0"
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
              items={items2}
            />
          </Sider>

          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            {/* Row for Profile */}
            <Row gutter={[16, 16]}>
              {/* Profile Section */}
              <Col className="mb-8" xs={24} sm={24} md={8}>
                <Card className="flex flex-col items-center shadow-lg p-4 rounded-lg bg-white">
                  <Avatar
                    size={64}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQT08_1dF0iNLYfRnL2lbqnlXg5QKKofxDew&s"
                    alt="User Profile"
                  />
                  <h3 className="text-lg font-semibold mt-2">John Doe</h3>
                  <p className="text-sm text-gray-500">john.doe@example.com</p>
                </Card>
              </Col>
            </Row>

            {/* Row for Line and Bar Charts */}
            <Row gutter={[16, 16]}>
              {/* Line Chart Section */}
              <Col xs={24} sm={12} md={12} lg={6}>
                <Card
                  title="Dataset 1 - Line Chart"
                  className="shadow-lg rounded-lg"
                >
                  <Line data={data1} />
                </Card>
              </Col>

              <Col xs={24} sm={12} md={12} lg={6}>
                <Card
                  title="Dataset 2 - Line Chart"
                  className="shadow-lg rounded-lg"
                >
                  <Line data={data2} />
                </Card>
              </Col>

              {/* Bar Chart Section */}
              <Col xs={24} sm={12} md={12} lg={6}>
                <Card title="Bar Chart 1" className="shadow-lg rounded-lg">
                  <Bar data={barData1} />
                </Card>
              </Col>

              <Col xs={24} sm={12} md={12} lg={6}>
                <Card title="Bar Chart 2" className="shadow-lg rounded-lg">
                  <Bar data={barData2} />
                </Card>
              </Col>
            </Row>

            <Row className="mt-7" gutter={[16, 16]}>
              {/* Messages Table */}
              <Col xs={24}>
                <Card title="User Messages" className="shadow-lg rounded-lg">
                  <Table
                    columns={columns}
                    dataSource={userMessages}
                    pagination={false}
                  />
                </Card>
              </Col>

              {/* User Satisfaction */}
              <Col xs={24} sm={12} md={8}>
                <Card
                  title="User Satisfaction"
                  className="shadow-lg rounded-lg"
                >
                  <ReactSpeedometer
                    maxValue={100}
                    value={75}
                    needleColor="red"
                    startColor="green"
                    endColor="blue"
                    segments={10}
                    width={200}
                    height={200}
                  />
                </Card>
              </Col>

              {/* Visits Percentage */}
              <Col xs={24} sm={12} md={8}>
                <Card title="Visit Percentage" className="shadow-lg rounded-lg">
                  <ReactSpeedometer
                    maxValue={100}
                    value={60}
                    needleColor="red"
                    startColor="yellow"
                    endColor="purple"
                    segments={5}
                    width={200}
                    height={200}
                  />
                </Card>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Content>

      {/* Footer */}
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2024 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default App;
