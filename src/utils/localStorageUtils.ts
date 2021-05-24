import { Todo } from '../types/todo'
// 保存数据到浏览器
export function saveTodos (todos: Todo[]) {
 localStorage.setItem('todos_key', JSON.stringify(todos))
}
// 读取浏览器缓存数据
export function readTodos (): Todo[] {
 return JSON.parse(localStorage.getItem('todos_key') || '[]')
}
