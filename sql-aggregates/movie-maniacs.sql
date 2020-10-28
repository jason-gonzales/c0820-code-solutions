select "firstName","lastName",
        sum("amount") as "moneySpent"
from "customers"
join "payments" using ("customerId")
group by "customers"."firstName", "customers"."lastName"
order by "moneySpent" desc;
