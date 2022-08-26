select sum("payments"."amount") as "totalPaid",
       "firstName",
       "lastName"
  from "customers"
  join "payments" using ("customerId")
  join "rentals" using ("rentalId")
  group by "customers"."firstName", "customers"."lastName"
  order by "totalPaid" desc;
