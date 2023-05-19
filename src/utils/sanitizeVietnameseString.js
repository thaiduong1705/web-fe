function sanitizeVietnameseString(str) {
    // Remove Vietnamese diacritics from the string
    str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    // Replace spaces with hyphens
    str = str.replace(/\s+/g, '-');

    // Convert the string to lowercase
    str = str.toLowerCase();

    return str;
}

export default sanitizeVietnameseString;
