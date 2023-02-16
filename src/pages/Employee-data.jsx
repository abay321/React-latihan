import { Avatar, Tag, Table, Tooltip, Button, Modal, Space } from "antd";
import * as AiIcons from "react-icons/ai";

const data = [
  {
    key: "1",
    profile: "./naruto.jpg",
    name: "Naruto",
    gender: ["Male"],
    email: "Narutoganteng@gmail.com",
    address: "New York No. 1 Lake Park",
    tags: ["developer"],
  },
  {
    key: "2",
    profile: "./sakura.jpg",
    name: "Sakura",
    gender: ["female"],
    email: "Sakurah@gmail.com",
    address: "New York No. 1 Lake Park",
    tags: ["developer"],
  },
  {
    key: "3",
    profile: "./kakashi.jpg",
    name: "Kakashi",
    gender: ["Male"],
    email: "kakashisan@gmail.com",
    address: "New York No. 1 Lake Park",
    tags: ["developer"],
  },
  {
    key: "4",
    name: "Madara",
    profile: "./madara.jpg",
    gender: ["Male"],
    email: "Madara@gmail.com",
    address: "New York No. 1 Lake Park",
    tags: ["developer"],
  },
  {
    key: "5",
    name: "Itachi",
    profile: "./itachi.jpg",
    gender: ["Male"],
    email: "itachi@gmail.com",
    address: "New York No. 1 Lake Park",
    tags: ["developer"],
  },
  {
    key: "6",
    name: "Hyugan",
    profile: "./hyugan.jpg",
    gender: ["Male"],
    email: "hyuganojutsu@gmail.com",
    address: "New York No. 1 Lake Park",
    tags: ["developer"],
  },
  {
    key: "7",
    name: "Boruto",
    profile: "./boruto.jpg",
    gender: ["Male"],
    email: "borutosan@gmail.com",
    address: "New York No. 1 Lake Park",
    tags: ["developer"],
  },
  {
    key: "8",
    name: "Boruto",
    profile: "./boruto.jpg",
    gender: ["Male"],
    email: "borutosan@gmail.com",
    address: "New York No. 1 Lake Park",
    tags: ["developer"],
  },
  {
    key: "9",
    name: "Boruto",
    profile: "./boruto.jpg",
    gender: ["Male"],
    email: "borutosan@gmail.com",
    address: "New York No. 1 Lake Park",
    tags: ["developer"],
  },
  {
    key: "10",
    name: "Boruto",
    profile: "./boruto.jpg",
    gender: ["Male"],
    email: "borutosan@gmail.com",
    address: "New York No. 1 Lake Park",
    tags: ["developer"],
  },
  {
    key: "11",
    name: "Boruto",
    profile: "./boruto.jpg",
    gender: ["Male"],
    email: "borutosan@gmail.com",
    address: "New York No. 1 Lake Park",
    tags: ["developer"],
  },
  {
    key: "12",
    name: "Boruto",
    profile: "./boruto.jpg",
    gender: ["Male"],
    email: "borutosan@gmail.com",
    address: "New York No. 1 Lake Park",
    tags: ["developer"],
  },
];

const EmployeeData = () => {
  const columns = [
    {
      title: "Profil",
      dataIndex: "profile",
      fixed: "left",
      key: "profile",
      width: 100,
      align: "center",
      render: (profile) => {
        return <Avatar src={profile} size={40} />;
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <span>{text}</span>,
      width: 250,
      align: "center",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      align: "center",
      render: (_, { gender }) => (
        <>
          {gender.map((gender) => {
            let color = gender === "Male" ? "geekblue" : "magenta";
            return (
              <Tag color={color} ket={gender}>
                {gender.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Job Role",
      key: "job_role",
      dataIndex: "job_role",
      align: "center",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            return (
              <Tag color={"green"} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      align: "center",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 150,
      align: "center",
      render: (_) => {
        <div>
          <Tooltip placement="topRight" title="Delete">
            <Button type="primary" danger className="del-button-table-dashboard">
              <AiIcons.AiOutlineDelete />
            </Button>
          </Tooltip>

          <Tooltip placement="topLeft" title="Update">
            <Button type="primary">
              <AiIcons.AiOutlineEdit />
            </Button>
          </Tooltip>
        </div>
      },
    },
  ];
  return (
    <div>
      <Table
      size="small"
        className="isi-tabel"
        columns={columns}
        dataSource={data}
        bordered
        pagination={{
          pageSize: 10,
          position: ["bottomCenter"],
        }}
        scroll={{
          y: 350,
          x: 1500,
        }}
      />
    </div>
  );
};
export default EmployeeData;
