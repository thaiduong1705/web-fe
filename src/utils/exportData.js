import * as XLSX from 'xlsx/xlsx.mjs';
export const exportExcel = (data, nameSheet, nameFile) => {
    try {
        const book = XLSX.utils.book_new();
        const sheet = XLSX.utils.json_to_sheet(data);
        XLSX.utils.book_append_sheet(book, sheet, nameSheet);
        XLSX.writeFile(book, `${nameFile}.xlsx`);
    } catch (error) {
        console.log(error);
    }
};
