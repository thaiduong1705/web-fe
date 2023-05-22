export default function convertDatetime(dateString) {
    const dateObject = new Date(dateString);
    const formattedDate = dateObject.toLocaleDateString('vi-VN');
    return formattedDate;
}
