'use client';

import { Col, Row, Button, Select, Tag , Space} from 'antd';
import Todo from './Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '@/redux/actions';
import { v4 as uuidv4 } from 'uuid';
import { ChangeEvent, useState } from 'react';
import { todosRemainingSelector } from '@/redux/selector';
import styled from "styled-components";
import InputField from "@/components/Form/InputField";
import useCreate, {FormValues} from './useForm/useTodoList';

type Priority = 'High' | 'Medium' | 'Low';

interface TodoItem {
  id: number;
  name: string;
  completed: boolean;
  priority: Priority;
}

export default function TodoList() {
  const [todoName, setTodoName] = useState<string>('');
  const [priority, setPriority] = useState<Priority>('Medium');
  const { form, onReset } = useCreate();
  const { control } = form;

  const todoList: TodoItem[] = useSelector(todosRemainingSelector);
  const dispatch = useDispatch();

  const handleAddButtonClick = () => {
    if (!todoName.trim()) return;

    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName.trim(),
        priority,
        completed: false,
      })
    );

    setTodoName('');
    setPriority('Medium');
    onReset();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoName(e.target.value);
  };

  const handlePriorityChange = (value: Priority) => {
    setPriority(value);
  };

  const disabledBtn = !form.formState.isValid;

  return (
    <CustomRow>
      <CustomCol span={24}>
        <>
          {todoList.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              name={todo.name}
              priority={todo.priority}
              completed={todo.completed}
            />
          ))}
        </>
      </CustomCol>
      <Col span={24}>
        <Space.Compact style={{ display: 'flex' }}>
          <InputField<FormValues, 'name'>
            controller={{ control, name: 'name' }}
            inputProps={{
              onChange: handleInputChange,
              placeholder: 'vui lòng điền thông tin'
            }}
            className="rounded-none"
          />
          <Select<Priority>
            value={priority}
            onChange={handlePriorityChange}
            style={{ minWidth: 120 }}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick} disabled={disabledBtn}>
            Add
          </Button>
        </Space.Compact>
      </Col>
    </CustomRow>
  );
}

const CustomCol = styled(Col)`
  height: calc(100% - 40px);
  overflow-y: auto;
`
const CustomRow = styled(Row)`
  height: calc(100% - 40px);
`
