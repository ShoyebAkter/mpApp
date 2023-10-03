import { CustomerApiCard } from "./CustomerApiCard"
import { OrderApi } from "./OrderApi"
import { SalesApi } from "./SalesApi"
import { UsersApi } from "./UsersApi"

export const LoginHome = () => {
  return (
    <div className="flex justify-around items-center pt-10">
        <CustomerApiCard/>
        <SalesApi/>
        <OrderApi/>
        <UsersApi/>
    </div>
  )
}
