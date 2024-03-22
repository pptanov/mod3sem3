import { useState } from 'react'
import './App.css'
import { Table } from "antd"
import { Button } from "antd"
import axios from 'axios'
import { ColumnsType } from 'antd/es/table'
import showPText from './styledP.tsx'


export default function DataTable() {
  const [page, setPage] = useState(1);
  const [dataSource, setDataSource] = useState();
  const [dataSourceNext, setDataSourceNext] = useState();

  interface DataType {
    id: string;
    title: string;
  }
  
  const columns: ColumnsType<DataType> = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'title',
      dataIndex: 'title',
      key: 'title',
    },
  ];


  const limit = 10;
  
  const getPagedData = async (page: number, limit: number) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${page}`)
    setDataSource(response.data);
  }
  const getPagedDataNext = async (page: number, limit: number) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${page}`)
    setDataSourceNext(response.data);
  }
  getPagedData(page, limit);


  function isDisabledBack(){
    return (page <= 1) ? true : false;
  }


  function isDisabledForward(){
    getPagedDataNext(page+1, limit);
    return (!dataSourceNext) ? true : false;
  }

  
  const valueBackButton = isDisabledBack();
  const valueForwardButton = isDisabledForward();


  return (
    <>
      <Table pagination={false} dataSource={dataSource} columns={columns} />
      <Button onClick={() => setPage(page-1)} disabled={valueBackButton}>Назад</Button>
      <Button onClick={() => setPage(page+1)} disabled={valueForwardButton}>Вперед</Button>
      {showPText(`${page}`)}
    </>
  )
}
