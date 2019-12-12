const queryForClientBalance = "Select distinct ca.CustodianAccountID as accountNumber,\n" +
	"  TR.TotalMarketValue as currentBalance,  \n" +
	"  TR.[DateKey] as asOfDate\n" +
	"from PWM_DM.[dbo].[Fact_AccountSummary] TR\n" +
	"INNER JOIN PWM_DM.[dbo].Dim_Account CA ON CA.AccountKey = TR.AccountKey\n" +
	"Inner Join\n" +
	"(\n" +
	"\tSELECT D.PWMAccountID, max([DateKey]) maxdatekey\n" +
	"\tFROM PWM_DM.[dbo].[Fact_AccountSummary] TR\n" +
	"\tINNER JOIN PWM_DM.[dbo].Dim_Account D ON D.AccountKey = TR.AccountKey\n" +
	"\tgroup by D.PWMAccountID\n" +
	"\n" +
	") Tmax On CA.PWMAccountID = TMax.PWMAccountID \n" +
	"\tand TR.Datekey = TMax.maxdatekey\n" +
	"where (:accountId)";


export {queryForClientBalance};