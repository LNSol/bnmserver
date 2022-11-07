const create = (req, res, apiParams) => {};
const read = (req, res, params) => {};
const update = (req, res) => {};
// const delete = (req, res) => { };

const execute = (req, res) => {
  switch (req.method) {
    case 'GET':
      break;
    default:
      return;
  }
};

export const api = (req, res) => {
  console.log('params>>', req.params);
  const { appid, version, schemas, idcmd } = req.params;
  if (req.method === 'GET' && isNaN(Number(idcmd))) {
  } else {
    res.json(execute(req, res));
  }
};

// @ToDo: move to utils/httputils.js
// param & query sample
export const apiParams = (req, res) => {
  console.log('params >> ', req.params);
  const { appid, version, schemas, idcmd } = req.params;
  // const { searchStr } = req.query;
  res.json({ appid, version, schemas, idcmd, query: req.query });
};

export const hello = (req, res) => {
  res.status(200).send('Hello World@@@');
};
