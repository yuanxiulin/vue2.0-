// 封装模块 使用localStorage实现持久化 只是进行保存
// 从localStorage中取出一项数据 名字叫name
export const getItem = (name) => {
  return JSON.parse(sessionStorage.getItem(name));
};
// 向localStorage中设置一项数据 名字为name里面设置值为obj
export const setItem = (name, obj) => {
  sessionStorage.setItem(name, JSON.stringify(obj));
};
// 删除
export const removeitem = (name) => {
  sessionStorage.removeItem(name);
};
