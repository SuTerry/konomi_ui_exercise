export default class Utils {
    /**
     * randomID
     * @param n number
     * @returns string
     */
    static randomID(n = 10): number {
        return Math.floor(Math.random() * Math.pow(10, n)) + Date.now()
    }

    /**
     * formatDate
     * @param millinSeconds Date
     * @returns dd/mm/yy hh:mm
     */
    static formatDate(millinSeconds: number): string {
        const date = new Date(millinSeconds)
        const monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Spt", "Oct", "Nov", "Dec"]

        const year = date.getFullYear() 
        const month = monthArr[date.getMonth()] 
        const ddate = date.getDate()
        const hours = date.getHours()
        const minutes = date.getMinutes()

        return `${ddate}/${month}/${year} ${hours}:${minutes}`
    }
}