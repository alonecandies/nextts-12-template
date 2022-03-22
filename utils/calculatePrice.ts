const calculatePrice = (price: number, sale: number) => {
	return (price * (100 - sale)) / 100;
};

export default calculatePrice;
