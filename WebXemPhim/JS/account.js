const Accounts = [{ email: "admin@gmail.com", password: "123123" }]

const getAccounts = () => Accounts

const createNewAccount = account => {
    const isExistedAccount = !!Accounts.find((x) => x.email === email)
    if (isExistedAccount) {
        return alert("Account đã tồn tại")
    } else {
        Accounts.push(account)
        return alert(`Đăng kí tài khoản ${account.email} thành công`)
    }
}

export { getAccounts, createNewAccount }