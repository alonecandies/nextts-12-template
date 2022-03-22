import _ from 'lodash';

const cleanObject = (keys: string[], data: any): any => {
	return _.pickBy(data, function (value, key) {
		return keys.includes(key);
	});
};

export default cleanObject;
