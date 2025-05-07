'use client';

import {ChangeEvent, useState} from 'react';
import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useDispatch } from 'react-redux';
import {
  priorityFilterChange,
  searchFilterChange,
  statusFilterChange,
} from '@/redux/actions';
import {FilterStatus, Priority} from "@/types";

const { Search } = Input;
const { Option } = Select;

export default function Filters() {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState<string>('');
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('All');
  const [filterPriorities, setFilterPriorities] = useState<Priority[]>([]);

  const handleSearchTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);
    dispatch(searchFilterChange(value));
  };

  const handleStatusChange = (e: any) => {
    const value: FilterStatus = e.target.value;
    setFilterStatus(value);
    dispatch(statusFilterChange(value));
  };

  const handlePriorityChange = (value: Priority[]) => {
    setFilterPriorities(value);
    dispatch(priorityFilterChange(value));
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          value={searchText}
          onChange={handleSearchTextChange}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={filterStatus} onChange={handleStatusChange}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priorities
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: '100%' }}
          value={filterPriorities}
          onChange={handlePriorityChange}
        >
          <Option value="High" label="High">
            <Tag color="red">High</Tag>
          </Option>
          <Option value="Medium" label="Medium">
            <Tag color="blue">Medium</Tag>
          </Option>
          <Option value="Low" label="Low">
            <Tag color="gray">Low</Tag>
          </Option>
        </Select>
      </Col>
    </Row>
  );
}
