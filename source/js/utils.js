const humanizeDate = (date, format) => {
    const data = `${date}T16:00:00.000Z`;
    return dayjs(data).format(format);
}

const humanizeDateForNigth = (date, format) => {
    const data = `${date}T16:00:00.000Z`;
    return dayjs(data).add(1, 'day').format(format);
}

const showAlert = (message) => {
    const alertContainer = document.createElement('div');
    alertContainer.style.zIndex = '100';
    alertContainer.style.position = 'absolute';
    alertContainer.style.left = '0';
    alertContainer.style.top = '500px';
    alertContainer.style.right = '0';
    alertContainer.style.padding = '10px 3px';
    alertContainer.style.fontSize = '30px';
    alertContainer.style.color = 'red';
    alertContainer.style.textAlign = 'center';
    alertContainer.style.backgroundColor = 'none';

    alertContainer.textContent = message;

    document.body.append(alertContainer);

    setTimeout(() => {
    alertContainer.remove();
    }, 5000);
};

export {humanizeDate, humanizeDateForNigth, showAlert}