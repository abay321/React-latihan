import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { ExclamationCircleFilled } from "@ant-design/icons";
import { Avatar, Tag, Table, Tooltip, Button, Modal, Space } from "antd";
import * as AiIcons from "react-icons/ai";
import axios from "axios";

const EmployeeData = () => {
  // Fetch Axios
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:9000/Data")
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:9000/Data");
      setData(response.data);
    } catch (err) {
      setError(err);
    }
  };

  const deleteData = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/Data/${id}`);
      setData(data.filter(item => item.id !== id));
    } catch (err) {
      setError(err);
    }
  };
  



  // Modal
  // const { confirm } = Modal;
  // const showDeleteConfirm = () => {
  //   confirm({
  //     title: "Are you sure delete this colums?",
  //     // icon: <ExclamationCircleFilled />,
  //     // content: 'Some descriptions',
  //     okText: "Yes",
  //     okType: "danger",
  //     cancelText: "No",
  //     onOk() {
  //       deleteData(data.id)
  //             // onClick={() => deleteData(data.id)}
  //       console.log("OK");

  //     },
  //     onCancel() {
  //       console.log("Cancel");
  //     },
  //   });
  // };

 

  const columns = [
    {
      title: "Profil",
      dataIndex: "profile",
      fixed: "left",
      key: "profile1",
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
      title: "Job role",
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
      render: (_) => (
        <div>
          <Tooltip placement="topRight" title="Delete">
            <Button
              type="primary"
              className="button-anjay"
              onClick={() => deleteData(data.id)}
            >
              <AiIcons.AiOutlineDelete />
            </Button>
          </Tooltip>

          <Tooltip placement="topLeft" title="Update">
            <Button type="primary">
              <AiIcons.AiOutlineEdit />
            </Button>
          </Tooltip>
        </div>
      ),
    },
  ];
  return (
    <div className="table-anjay">
      <Table
        size="small"
        columns={columns}
        dataSource={data.map((data) => {
          return {
            key: data.key,
            profile: data.profile,
            name: data.name,
            gender: data.gender,
            email: data.email,
            address: data.address,
            tags: data.tags,
          };
        })}
        bordered
        pagination={{
          pageSize: 10,
          position: ["bottomCenter"],
        }}
        scroll={{
          y: 400,
          x: 1500,
        }}
      />
    </div>
  );
};
export default EmployeeData;
