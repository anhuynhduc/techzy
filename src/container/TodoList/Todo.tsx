'use client';

import { Row, Tag, Checkbox } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodoStatus } from '@/redux/actions';
import {PriorityColorMapping, TodoProps} from "@/types";

export default function Todo({ id, name, completed, priority }: TodoProps) {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState<boolean>(completed);

  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(toggleTodoStatus(id));
  };

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={PriorityColorMapping[priority]} style={{ margin: 0 }}>
        {priority}
      </Tag>
    </Row>
  );
}
