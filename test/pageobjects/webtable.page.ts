class WebTablePage{
async getItem(row: number, column: number){
    return await $(`//table/tbody/tr[${row}]/td[${column}]`)
}

}
export default WebTablePage;