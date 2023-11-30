
// import React, { useState } from 'react';
// import { Input, Button, List } from 'antd';
// import '../css/c.css';
// import { PlusOutlined } from '@ant-design/icons';
// import { DeleteOutlined } from '@ant-design/icons';


// const TodoApp = () => {
//   const [task, setTask] = useState('');
//   const [tasks, setTasks] = useState([]);

//   const handleInputChange = (e) => {
//     setTask(e.target.value);
//   };

//   const handleAddTask = () => {
//     if (task.trim() !== '') {
//       const newTask = {
//         id: Date.now(),
//         text: task,
//       };
//       setTasks([...tasks, newTask]);
//       setTask('');
//     }
//   };

//   const handleRemoveTask = (taskId) => {
//     const updatedTasks = tasks.filter((task) => task.id !== taskId);
//     setTasks(updatedTasks);
//   };

// // ...

// return (
//   <div className='bg-color'>
//     <div style={{ width: '300px', marginTop: 150 }} className='kk'>
//       <h3 className='heading'>To-Do App</h3>
//       <div className='ib'>
//       <Input
//   placeholder="Enter a task"
//   value={task}
//   onChange={handleInputChange}
//   className='input'
//   style={{ color: 'white', placeholderTextColor: 'white' }}
// />


//         <Button
//           className='t-button'
//           onClick={handleAddTask}
//           icon={<PlusOutlined style={{ color: 'white',  }} />}
//           style={{ marginLeft: 10 , borderRadius:'50px'}}

//         >
        
//         </Button>
//       </div>
//       <List
//         className='list' // Add the className for the list container
//         style={{ marginTop: '20px' }}
//         bordered
//         dataSource={tasks}
//         renderItem={(item) => (
//           <List.Item>
//             <div className='task-item' style={{ color: 'white' }}>
//               {item.text}
//               <Button
//   type="link"
//   onClick={() => handleRemoveTask(item.id)}
//   style={{ color: 'red' }}
//   icon={<DeleteOutlined />}
// >
 
// </Button>

//             </div>
//           </List.Item>
//         )}
//       />
//     </div>
//   </div>
// );

// };

// export default TodoApp;






import React, { useState } from 'react';
import { Input, Button, List, Radio } from 'antd';
import '../css/c.css';
import {
  PlusOutlined,
  DeleteOutlined,
  EditOutlined,
  SaveOutlined,
} from '@ant-design/icons';

const TodoApp = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editTaskText, setEditTaskText] = useState('');
  const [editTaskId, setEditTaskId] = useState(null);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: task,
        completed: false, // Initialize as incomplete
      };
      setTasks([...tasks, newTask]);
      setTask('');
    }
  };

  const handleRemoveTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleEditTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    if (taskToEdit) {
      setEditTaskText(taskToEdit.text);
      setEditTaskId(taskId);
    }
  };

  const handleSaveEdit = () => {
    if (editTaskId !== null) {
      const updatedTasks = tasks.map((task) =>
        task.id === editTaskId ? { ...task, text: editTaskText } : task
      );
      setTasks(updatedTasks);
      setEditTaskText('');
      setEditTaskId(null);
    }
  };

  const handleTaskCompletionChange = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className='bg-color'>
      <div style={{ width: '300px', marginTop: 150 }} className='kk'>
        <h3 className='heading'>To-Do App</h3>
        <div className='ib'>
          <Input
            placeholder='Enter a task'
            value={task}
            onChange={handleInputChange}
            className='input'
            style={{ color: 'white', placeholderTextColor: 'white' }}
          />
          <Button
            className='t-button'
            onClick={handleAddTask}
            icon={<PlusOutlined style={{ color: 'white' }} />}
            style={{ marginLeft: 10, borderRadius: '50px' }}
          />
        </div>
        <List
          className='list' // Add the className for the list container
          style={{ marginTop: '20px' }}
          bordered
          dataSource={tasks}
          renderItem={(item) => (
            <List.Item
              actions={[
                item.id === editTaskId ? (
                  <Button
                    type='link'
                    onClick={handleSaveEdit}
                    style={{ color: 'green' }}
                    icon={<SaveOutlined />}
                  />
                ) : (
                  <>
                    <Button
                      type='link'
                      onClick={() => handleEditTask(item.id)}
                      style={{ color: 'blue' }}
                      icon={<EditOutlined />}
                    />
                    <Button
                      type='link'
                      onClick={() => handleRemoveTask(item.id)}
                      style={{ color: 'red' }}
                      icon={<DeleteOutlined />}
                    />
                  </>
                ),
              ]}
            >
              <div>
                <Radio
                  checked={item.completed}
                  onChange={() => handleTaskCompletionChange(item.id)}
                />
                {item.id === editTaskId ? (
                  <Input
                    value={editTaskText}
                    onChange={(e) => setEditTaskText(e.target.value)}
                  />
                ) : (
                  <span style={{ color: 'white' }}>{item.text}</span>
                )}
              </div>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default TodoApp;
