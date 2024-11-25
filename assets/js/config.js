const HexApi = 'https://livejs-api.hexschool.io/';
const apiPath = 'yameow999';

//前台customer
const customerApi = `${HexApi}api/livejs/v1/customer/${apiPath}`;

//後台admin
const adminApi = `${HexApi}api/livejs/v1/admin/${apiPath}`;
const adminToken = 'vruPjVITW7PaX7ruCuJr2t744jk2';
const adminAuthz = {
    headers: {
        authorization: adminToken
    }
}