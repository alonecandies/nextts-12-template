const formatCurrency = (value: number): string => {
	return value.toLocaleString('vi', { style: 'currency', currency: 'VND' });
};

export default formatCurrency;