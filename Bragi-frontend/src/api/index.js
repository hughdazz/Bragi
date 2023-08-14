// 导入RequestHttp类
import request from 'Bragi-frontend\src\api\axiosRequest.js'; // 替换为实际路径
/**
 * 管理员操作
 */
export const reqAdminGetWebsiteConfig = () =>
  request.get('/admin/websiteConfig');

export const reqAdminPostWebsiteConfig = (params) =>
  request.post('/admin/updateWebsiteConfig', params);

export const reqAdminGetUserList = () =>
  request.get('/admin/listUser');
/**
 * 文章操作
 */
export const reqArticleGetArticleList = (params) =>
  request.get('/article', { params });
export const reqArticleGetText = (authorid, articleid, params) =>
  request.get(`/article/${authorid}/${articleid}`, { params });

// 其他 API 类似地进行封装...

/**
 * 笔记和笔记本操作
 */

export const reqNotePostSave = (notebookname, notetitle) =>
  request.post(`/note/${notebookname}/${notetitle}`);

export const reqNoteGetSearch = (params) =>
  request.get('/note/search', { params });

// 其他 API 类似地进行封装...

/**
 * 用户操作
 */

export const reqUserPostLogin = (params) =>
  request.post('/user/login', params);

export const reqUserPostValidate = (params) =>
  request.post('/user/validate', params);

// 其他 API 类似地进行封装...

/**
 * TODO: 导出其他 API。
 */
