const terms = [
    {
        "term": "Acceleration Clause",
        "definition": "A clause in your mortgage which allows the lender to demand payment of the outstanding loan balance for various reasons. The most common reasons for accelerating a loan are if the borrower defaults on the loan or transfers title to another individual without informing the lender."
    },
    {
        "term": "Adjustable-Rate Mortgage (ARM)",
        "definition": "A mortgage in which the interest changes periodically, according to corresponding fluctuations in an index. All ARMs are tied to indexes."
    },
    {
        "term": "Adjustment Date",
        "definition": "The date the interest rate changes on an adjustable-rate mortgage."
    },
    {
        "term": "aAortization",
        "definition": "The loan payment consists of a portion which will be applied to pay the accruing interest on a loan, with the remainder being applied to the principal. Over time, the interest portion decreases as the loan balance decreases, and the amount applied to principal increases so that the loan is paid off (amortized) in the specified time."
    },
    {
        "term": "Amortization Schedule",
        "definition": "A table which shows how much of each payment will be applied toward principal and how much toward interest over the life of the loan. It also shows the gradual decrease of the loan balance until it reaches zero."
    },
    {
        "term": "Annual Percentage Rate (APR)",
        "definition": "This is not the note rate on your loan. It is a value created according to a government formula intended to reflect the true annual cost of borrowing, expressed as a percentage. It works sort of like this, but not exactly, so only use this as a guideline: deduct the closing costs from your loan amount, then using your actual loan payment, calculate what the interest rate would be on this amount instead of your actual loan amount. You will come up with a number close to the APR. Because you are using the same payment on a smaller amount, the APR is always higher than the actual note rate on your loan."
    },
    {
        "term": "Application",
        "definition": "The form used to apply for a mortgage loan, containing information about a borrower's income, savings, assets, debts, and more."
    },
    {
        "term": "Appraisal",
        "definition": "A written justification of the price paid for a property, primarily based on an analysis of comparable sales of similar homes nearby."
    },
    {
        "term": "Appraised Value",
        "definition": "An opinion of a property's fair market value, based on an appraiser's knowledge, experience, and analysis of the property. Since an appraisal is based primarily on comparable sales, and the most recent sale is the one on the property in question, the appraisal usually comes out at the purchase price."
    },
    {
        "term": "Appraiser",
        "definition": "An individual qualified by education, training, and experience to estimate the value of real property and personal property. Although some appraisers work directly for mortgage lenders, most are independent."
    },
    {
        "term": "Appreciation",
        "definition": "The increase in the value of a property due to changes in market conditions, inflation, or other causes."
    },
    {
        "term": "Assessed Value",
        "definition": "The valuation placed on property by a public tax assessor for purposes of taxation."
    },
    {
        "term": "Assessment",
        "definition": "The placing of a value on property for the purpose of taxation."
    },
    {
        "term": "Assessor",
        "definition": "A public official who establishes the value of a property for taxation purposes."
    },
    {
        "term": "Asset",
        "definition": "Items of value owned by an individual. Assets that can be quickly converted into cash are considered \"liquid assets.\" These include bank accounts, stocks, bonds, mutual funds, and so on. Other assets include real estate, personal property, and debts owed to an individual by others."
    },
    {
        "term":"Assignee",
        "definition": "The person to whom a claim, benefit, or right in property is made."
    },
    {
        "term": "Assignment",
        "definition": "When ownership of your mortgage is transferred from one company or individual to another, it is called an assignment."
    },
    {
        "term": "Assumable Mortgage",
        "definition": "A mortgage that can be assumed by the buyer when a home is sold. Usually, the borrower must \"qualify\" in order to assume the loan."
    },
    {
        "term": "Assumption",
        "definition": "The term applied when a buyer assumes the seller's mortgage."
    },
    {
        "term": "Attorney-In-Fact",
        "definition": "A competent and disinterested person who is authorized by another person to act in his or her place in legal matters"
    },
    {
        "term": "Balloon Mortgage",
        "definition": "A mortgage loan that requires the remaining principal balance be paid at a specific point in time. For example, a loan may be amortized as if it would be paid over a thirty year period, but requires that at the end of the tenth year the entire remaining balance must be paid."
    },
    {
        "term": "Balloon Payment",
        "definition": "The final lump sum payment that is due at the termination of a balloon mortgage."
    },
    {
        "term": "Bankruptcy",
        "definition": "By filing in federal bankruptcy court, an individual or individuals can restructure or relieve themselves of debts and liabilities. Bankruptcies are of various types, but the most common for an individual seem to be a \"Chapter 7 No Asset\" bankruptcy which relieves the borrower of most types of debts. A borrower cannot usually qualify for an \"A\" paper loan for a period of two years after the bankruptcy has been discharged and requires the re-establishment of an ability to repay debt."
    },
    {
        "term": "bill of sale",
        "definition": "A written document that transfers title to personal property. For example, when selling an automobile to acquire funds which will be used as a source of down payment or for closing costs, the lender will usually require the bill of sale (in addition to other items) to help document this source of funds."
    },
    {
        "term": "biweekly mortgage",
        "definition": "A mortgage in which you make payments every two weeks instead of once a month. The basic result is that instead of making twelve monthly payments during the year, you make thirteen. The extra payment reduces the principal, substantially reducing the time it takes to pay off a thirty year mortgage. there are independent companies that encourage you to set up bi-weekly payment schedules with them on your thirty year mortgage. They charge a set-up fee and a transfer fee for every payment. Your funds are deposited into a trust account from which your monthly payment is then made, and the excess funds then remain in the trust account until enough has accrued to make the additional payment which will then be paid to reduce your principle. You could save money by doing the same thing yourself, plus you have to have faith that once you transfer money to them that they will actually transfer your funds to your lender."
    },
    {
        "term": "bond market",
        "definition": "Usually refers to the daily buying and selling of thirty year treasury bonds. Lenders follow this market intensely because as the yields of bonds go up and down, fixed rate mortgages do approximately the same thing. The same factors that affect the Treasury Bond market also affect mortgage rates at the same time. That is why rates change daily, and in a volatile market can and do change during the day as well."
    },
    {
        "term": "bridge loan",
        "definition": "Not used much anymore, bridge loans are obtained by those who have not yet sold their previous property, but must close on a purchase property. The bridge loan becomes the source of their funds for the down payment. One reason for their fall from favor is that there are more and more second mortgage lenders now that will lend at a high loan to value. In addition, sellers often prefer to accept offers from buyers who have already sold their property."
    },
    {
        "term": "broker",
        "definition": "Broker has several meanings in different situations. Most Realtors are \"agents\" who work under a \"broker.\" Some agents are brokers as well, either working form themselves or under another broker. In the mortgage industry, broker usually refers to a company or individual that does not lend the money for the loans themselves, but broker loans to larger lenders or investors. (See the Home Loan Library that discusses the different types of lenders). As a normal definition, a broker is anyone who acts as an agent, bringing two parties together for any type of transaction and earns a fee for doing so."
    },
    {
        "term": "buydown",
        "definition": "Usually refers to a fixed rate mortgage where the interest rate is \"bought down\" for a temporary period, usually one to three years. After that time and for the remainder of the term, the borrower's payment is calculated at the note rate. In order to buy down the initial rate for the temporary payment, a lump sum is paid and held in an account used to supplement the borrower's monthly payment. These funds usually come from the seller (or some other source) as a financial incentive to induce someone to buy their property. A \"lender funded buydown\" is when the lender pays the initial lump sum. They can accomplish this because the note rate on the loan (after the buydown adjustments) will be higher than the current market rate. One reason for doing this is because the borrower may get to \"qualify\" at the start rate and can qualify for a higher loan amount. Another reason is that a borrower may expect his earnings to go up substantially in the near future, but wants a lower payment right now."
    },
    {
        "term": "call option",
        "definition": "Similar to the acceleration clause."
    },
    {
        "term": "cap",
        "definition": "Adjustable Rate Mortgages have fluctuating interest rates, but those fluctuations are usually limited to a certain amount. Those limitations may apply to how much the loan may adjust over a six month period, an annual period, and over the life of the loan, and are referred to as \"caps.\" Some ARMs, although they may have a life cap, allow the interest rate to fluctuate freely, but require a certain minimum payment which can change once a year. There is a limit on how much that payment can change each year, and that limit is also referred to as a cap."
    },
    {
        "term": "cash-out refinance",
        "definition": "When a borrower refinances his mortgage at a higher amount than the current loan balance with the intention of pulling out money for personal use, it is referred to as a \"cash out refinance.\""
    },
    {
        "term": "certificate of deposit",
        "definition": "A time deposit held in a bank which pays a certain amount of interest to the depositor."
    },
    {
        "term": "certificate of deposit index",
        "definition": "One of the indexes used for determining interest rate changes on some adjustable rate mortgages. It is an average of what banks are paying on certificates of deposit."
    },
    {
        "term": "Certificate of Eligibility",
        "definition": "A document issued by the Veterans Administration that certifies a veteran's eligibility for a VA loan."
    },
    {
        "term": "Certificate of Reasonable Value (CRV)",
        "definition": "Once the appraisal has been performed on a property being bought with a VA loan, the Veterans Administration issues a CRV."
    },
    {
        "term": "Chain of Title",
        "definition": "An analysis of the transfers of title to a piece of property over the years."
    },
    {
        "term": "Clear Title",
        "definition": "A title that is free of liens or legal questions as to ownership of the property."
    },
    {
        "term": "Closing",
        "definition": "This has different meanings in different states. In some states a real estate transaction is not consider \"closed\" until the documents record at the local recorders office. In others, the \"closing\" is a meeting where all of the documents are signed and money changes hands."
    },
    {
        "term": "Closing Costs",
        "definition": "Closing costs are separated into what are called \"non-recurring closing costs\" and \"pre-paid items.\" Non-recurring closing costs are any items which are paid just once as a result of buying the property or obtaining a loan. \"Pre-paids\" are items which recur over time, such as property taxes and homeowners insurance. A lender makes an attempt to estimate the amount of non-recurring closing costs and prepaid items on the Good Faith Estimate which they must issue to the borrower within three days of receiving a home loan application."
    },
    {
        "term": "Closing Statement",
        "definition": "See Settlement Statement."
    },
    {
        "term": "Cloud on Title",
        "definition": "Any conditions revealed by a title search that adversely affect the title to real estate. Usually clouds on title cannot be removed except by deed, release, or court action."
    },
    {
        "term": "Co-Borrower",
        "definition": "IAn additional individual who is both obligated on the loan and is on title to the property."
    },
    {
        "term": "Collateral",
        "definition": "In a home loan, the property is the collateral. The borrower risks losing the property if the loan is not repaid according to the terms of the mortgage or deed of trust."
    },
    {
        "term": "Collection",
        "definition": "When a borrower falls behind, the lender contacts them in an effort to bring the loan current. The loan goes to \"collection.\" As part of the collection effort, the lender must mail and record certain documents in case they are eventually required to foreclose on the property."
    },
    {
        "term": "Commission",
        "definition": "Most salespeople earn commissions for the work that they do and there are many sales professionals involved in each transaction, including Realtors, loan officers, title representatives, attorneys, escrow representative, and representatives for pest companies, home warranty companies, home inspection companies, insurance agents, and more. The commissions are paid out of the charges paid by the seller or buyer in the purchase transaction. Realtors generally earn the largest commissions, followed by lenders, then the others."
    },
    {
        "term": "Common Area Assessments",
        "definition": "In some areas they are called Homeowners Association Fees. They are charges paid to the Homeowners Association by the owners of the individual units in a condominium or planned unit development (PUD) and are generally used to maintain the property and common areas."
    },
    {
        "term": "Common Areas",
        "definition": "Those portions of a building, land, and amenities owned (or managed) by a planned unit development (PUD) or condominium project's homeowners' association (or a cooperative project's cooperative corporation) that are used by all of the unit owners, who share in the common expenses of their operation and maintenance. Common areas include swimming pools, tennis courts, and other recreational facilities, as well as common corridors of buildings, parking areas, means of ingress and egress, etc."
    },
    {
        "term": "Common Law",
        "definition": "An unwritten body of law based on general custom in England and used to an extent in some states."
    },
    {
        "term": "Community Property",
        "definition": "In some states, especially the southwest, property acquired by a married couple during their marriage is considered to be owned jointly, except under special circumstances. This is an outgrowth of the Spanish and Mexican heritage of the area."
    },
    {
        "term": "Comparable Sales",
        "definition": "Recent sales of similar properties in nearby areas and used to help determine the market value of a property. Also referred to as \"comps.\""
    },
    {
        "term": "Condominium",
        "definition": "A type of ownership in real property where all of the owners own the property, common areas and buildings together, with the exception of the interior of the unit to which they have title. Often mistakenly referred to as a type of construction or development, it actually refers to the type of ownership."
    },
    {
        "term": "Condominium Conversion",
        "definition": "Changing the ownership of an existing building (usually a rental project) to the condominium form of ownership."
    },
    {
        "term": "Condominium Hotel",
        "definition": "A condominium project that has rental or registration desks, short-term occupancy, food and telephone services, and daily cleaning services and that is operated as a commercial hotel even though the units are individually owned. These are often found in resort areas like Hawaii."
    },
    {
        "term": "Construction Loan",
        "definition": "A short-term, interim loan for financing the cost of construction. The lender makes payments to the builder at periodic intervals as the work progresses."
    },
    {
        "term": "Contingency",
        "definition": "A condition that must be met before a contract is legally binding. For example, home purchasers often include a contingency that specifies that the contract is not binding until the purchaser obtains a satisfactory home inspection report from a qualified home inspector."
    },
    {
        "term": "Contract",
        "definition": "An oral or written agreement to do or not to do a certain thing."
    },
    {
        "term": "Conventional Mortgage",
        "definition": "Refers to home loans other than government loans (VA and FHA)."
    },
    {
        "term": "Convertible ARM",
        "definition": "An adjustable-rate mortgage that allows the borrower to change the ARM to a fixed-rate mortgage within a specific time."
    },
    {
        "term": "Cooperative (co-op)",
        "definition": "A type of multiple ownership in which the residents of a multiunit housing complex own shares in the cooperative corporation that owns the property, giving each resident the right to occupy a specific apartment or unit."
    },
    {
        "term": "Cost of Funds Index (COFI)",
        "definition": "One of the indexes that is used to determine interest rate changes for certain adjustable-rate mortgages. It represents the weighted-average cost of savings, borrowings, and advances of the financial institutions such as banks and savings & loans, in the 11th District of the Federal Home Loan Bank."
    },
    {
        "term": "Credit",
        "definition": "An agreement in which a borrower receives something of value in exchange for a promise to repay the lender at a later date."
    },
    {
        "term": "Credit History",
        "definition": "A record of an individual's repayment of debt. Credit histories are reviewed my mortgage lenders as one of the underwriting criteria in determining credit risk."
    },
    {
        "term": "Creditor",
        "definition": "A person to whom money is owed."
    },
    {
        "term": "Credit Report",
        "definition": "A report of an individual's credit history prepared by a credit bureau and used by a lender in determining a loan applicant's creditworthiness."
    },
    {
        "term": "Credit Repository",
        "definition": "An organization that gathers, records, updates, and stores financial and public records information about the payment records of individuals who are being considered for credit."
    },
    {
        "term": "Debt",
        "definition": "An amount owed to another."
    },
    {
        "term": "Deed",
        "definition": "The legal document conveying title to a property."
    },
    {
        "term": "Deed-in-Lieu",
        "definition": "Short for \"deed in lieu of foreclosure,\" this conveys title to the lender when the borrower is in default and wants to avoid foreclosure. The lender may or may not cease foreclosure activities if a borrower asks to provide a deed-in-lieu. Regardless of whether the lender accepts the deed-in-lieu, the avoidance and non-repayment of debt will most likely show on a credit history. What a deed-in-lieu may prevent is having the documents preparatory to a foreclosure being recorded and become a matter of public record."
    },
    {
        "term": "Deed of Trust",
        "definition": "Some states, like California, do not record mortgages. Instead, they record a deed of trust which is essentially the same thing."
    },
    {
        "term": "Default",
        "definition": "Failure to make the mortgage payment within a specified period of time. For first mortgages or first trust deeds, if a payment has still not been made within 30 days of the due date, the loan is considered to be in default."
    },
    {
        "term": "Delinquency",
        "definition": "Failure to make mortgage payments when mortgage payments are due. For most mortgages, payments are due on the first day of the month. Even though they may not charge a \"late fee\" for a number of days, the payment is still considered to be late and the loan delinquent. When a loan payment is more than 30 days late, most lenders report the late payment to one or more credit bureaus."
    },
    {
        "term": "Deposit",
        "definition": "A sum of money given in advance of a larger amount being expected in the future. Often called in real estate as an \"earnest money deposit.\""
    },
    {
        "term": "Depreciation",
        "definition": "A decline in the value of property; the opposite of appreciation. Depreciation is also an accounting term which shows the declining monetary value of an asset and is used as an expense to reduce taxable income. Since this is not a true expense where money is actually paid, lenders will add back depreciation expense for self-employed borrowers and count it as income."
    },
    {
        "term": "Discount Points",
        "definition": "In the mortgage industry, this term is usually used in only in reference to government loans, meaning FHA and VA loans. Discount points refer to any \"points\" paid in addition to the one percent loan origination fee. A \"point\" is one percent of the loan amount."
    },
    {
        "term":"Doctrine of Correlative User",
        "definition":"Owners may use only a reasonable ammount of the total water supply for beneficial use."
    },
    {
        "term": "Down Payment",
        "definition": "The part of the purchase price of a property that the buyer pays in cash and does not finance with a mortgage."
    },
    {
        "term": "Due-on-Sale Provision",
        "definition": "A provision in a mortgage that allows the lender to demand repayment in full if the borrower sells the property that serves as security for the mortgage."
    },
    {
        "term": "Duress",
        "definition": "The use of force to get agreement in accepting a contract."
    },
    {
        "term": " Earnest Money Deposit",
        "definition": "A deposit made by the potential home buyer to show that he or she is serious about buying the house."
    },
    {
        "term": "Easement",
        "definition": "A right of way giving persons other than the owner access to or over a property."
    },
    {
        "term": "Effective Age",
        "definition": "An appraiser's estimate of the physical condition of a building. The actual age of a building may be shorter or longer than its effective age."
    },
    {
        "term": "Eminent Domain",
        "definition": "The right of a government to take private property for public use upon payment of its fair market value. Eminent domain is the basis for condemnation proceedings."
    },
    {
        "term": "Encroachment",
        "definition": "An improvement that intrudes illegally on another's property."
    },
    {
        "term": "Encumbrance",
        "definition": "Anything that affects or limits the fee simple title to a property, such as mortgages, leases, easements, or restrictions."
    },
    {
        "term": "Equal Credit Opportunity Act (ECOA)",
        "definition": "A federal law that requires lenders and other creditors to make credit equally available without discrimination based on race, color, religion, national origin, age, sex, marital status, or receipt of income from public assistance programs."
    },
    {
        "term": "Equity",
        "definition": "A homeowner's financial interest in a property. Equity is the difference between the fair market value of the property and the amount still owed on its mortgage and other liens."
    },
    {
        "term": "Escrow",
        "definition": "An item of value, money, or documents deposited with a third party to be delivered upon the fulfillment of a condition. For example, the earnest money deposit is put into escrow until delivered to the seller when the transaction is closed."
    },
    {
        "term": "Escrow Account",
        "definition": "Once you close your purchase transaction, you may have an escrow account or impound account with your lender. This means the amount you pay each month includes an amount above what would be required if you were only paying your principal and interest. The extra money is held in your impound account (escrow account) for the payment of items like property taxes and homeowner's insurance when they come due. The lender pays them with your money instead of you paying them yourself."
    },
    {
        "term": "Escrow Analysis",
        "definition": "Once each year your lender will perform an \"escrow analysis\" to make sure they are collecting the correct amount of money for the anticipated expenditures."
    },
    {
        "term": "Escrow Disbursements",
        "definition": "The use of escrow funds to pay real estate taxes, hazard insurance, mortgage insurance, and other property expenses as they become due."
    },
    {
        "term": "Estate",
        "definition": "The ownership interest of an individual in real property. The sum total of all the real property and personal property owned by an individual at time of death."
    },
    {
        "term": "Eviction",
        "definition": "The lawful expulsion of an occupant from real property."
    },
    {
        "term": "Examination of Title",
        "definition": "The report on the title of a property from the public records or an abstract of the title."
    },
    {
        "term": "Exclusive Listing",
        "definition": "A written contract that gives a licensed real estate agent the exclusive right to sell a property for a specified time."
    },
    {
        "term": "Executor",
        "definition": "A person named in a will to administer an estate. The court will appoint an administrator if no executor is named. \"Executrix\" is the feminine form."
    },
    {
        "term": "Fair Credit Reporting Act",
        "definition": "A consumer protection law that regulates the disclosure of consumer credit reports by consumer/credit reporting agencies and establishes procedures for correcting mistakes on one's credit record."
    },
    {
        "term": "Fair Market Value",
        "definition": "The highest price that a buyer, willing but not compelled to buy, would pay, and the lowest a seller, willing but not compelled to sell, would accept."
    },
    {
        "term": "Fannie Mae (FNMA)",
        "definition": "The Federal National Mortgage Association, which is a congressionally chartered, shareholder-owned company that is the nation's largest supplier of home mortgage funds. For a discussion of the roles of Fannie Mae, Freddie Mac (FHLMC), and Ginnie Mae (GNMA), see the Library."
    },
    {
        "term": "Fannie Mae's Community Home Buyer's Program",
        "definition": "An income-based community lending model, under which mortgage insurers and Fannie Mae offer flexible underwriting guidelines to increase a low- or moderate-income family's buying power and to decrease the total amount of cash needed to purchase a home. Borrowers who participate in this model are required to attend pre-purchase home-buyer education sessions."
    },
    {
        "term": "Federal Housing Administration (FHA)",
        "definition": "An agency of the U.S. Department of Housing and Urban Development (HUD). Its main activity is the insuring of residential mortgage loans made by private lenders. The FHA sets standards for construction and underwriting but does not lend money or plan or construct housing."
    },
    {
        "term": "Fee Simple",
        "definition": "The greatest possible interest a person can have in real estate."
    },
    {
        "term": "Fee Simple Estate",
        "definition": "An unconditional, unlimited estate of inheritance that represents the greatest estate and most extensive interest in land that can be enjoyed. It is of perpetual duration. When the real estate is in a condominium project, the unit owner is the exclusive owner only of the air space within his or her portion of the building (the unit) and is an owner in common with respect to the land and other common portions of the property."
    },
    {
        "term": "FHA mortgage",
        "definition": "A mortgage that is insured by the Federal Housing Administration (FHA). Along with VA loans, an FHA loan will often be referred to as a government loan."
    },
    {
        "term": "Firm Commitment",
        "definition": "A lender's agreement to make a loan to a specific borrower on a specific property."
    },
    {
        "term": "First Mortgage",
        "definition": "The mortgage that is in first place among any loans recorded against a property. Usually refers to the date in which loans are recorded, but there are exceptions."
    },
    {
        "term": "Fixed-Rate Mortgage",
        "definition": "A mortgage in which the interest rate does not change during the entire term of the loan."
    },
    {
        "term": "Fixture",
        "definition": "Personal property that becomes real property when attached in a permanent manner to real estate."
    },
    {
        "term": "Flood Insurance",
        "definition": "Insurance that compensates for physical property damage resulting from flooding. It is required for properties located in federally designated flood areas."
    },
    {
        "term": "Foreclosure",
        "definition": "The legal process by which a borrower in default under a mortgage is deprived of his or her interest in the mortgaged property. This usually involves a forced sale of the property at public auction with the proceeds of the sale being applied to the mortgage debt."
    },
    {
        "term": "401(k)/403(b)",
        "definition": "An employer-sponsored investment plan that allows individuals to set aside tax-deferred income for retirement or emergency purposes. 401(k) plans are provided by employers that are private corporations. 403(b) plans are provided by employers that are not for profit organizations."
    },
    {
        "term": "401(k)/403(b) loan",
        "definition": "Some administrators of 401(k)/403(b) plans allow for loans against the monies you have accumulated in these plans. Loans against 401K plans are an acceptable source of down payment for most types of loans."
    },
    {
        "term": "Government Loan (Mortgage)",
        "definition": "A mortgage that is insured by the Federal Housing Administration (FHA) or guaranteed by the Department of Veterans Affairs (VA) or the Rural Housing Service (RHS). Mortgages that are not government loans are classified as conventional loans."
    },
    {
        "term": "Government National Mortgage Association (Ginnie Mae)",
        "definition": "A government-owned corporation within the U.S. Department of Housing and Urban Development (HUD). Created by Congress on September 1, 1968, GNMA performs the same role as Fannie Mae and Freddie Mac in providing funds to lenders for making home loans. The difference is that Ginnie Mae provides funds for government loans (FHA and VA)"
    },
    {
        "term": "Grantee",
        "definition": "The person to whom an interest in real property is conveyed."
    },
    {
        "term": "Grantor",
        "definition": "The person conveying an interest in real property."
    },
    {
        "term": "Hazard Insurance",
        "definition": "Insurance coverage that in the event of physical damage to a property from fire, wind, vandalism, or other hazards."
    },
    {
        "term": "Home Equity Conversion Mortgage (HECM)",
        "definition": "Usually referred to as a reverse annuity mortgage, what makes this type of mortgage unique is that instead of making payments to a lender, the lender makes payments to you. It enables older home owners to convert the equity they have in their homes into cash, usually in the form of monthly payments. Unlike traditional home equity loans, a borrower does not qualify on the basis of income but on the value of his or her home. In addition, the loan does not have to be repaid until the borrower no longer occupies the property."
    },
    {
        "term": "Home Equity Line of Credit",
        "definition": "A mortgage loan, usually in second position, that allows the borrower to obtain cash drawn against the equity of his home, up to a predetermined amount."
    },
    {
        "term": "Home Inspection",
        "definition": "A thorough inspection by a professional that evaluates the structural and mechanical condition of a property. A satisfactory home inspection is often included as a contingency by the purchaser."
    },
    {
        "term": "Homeowners' Association",
        "definition": "A nonprofit association that manages the common areas of a planned unit development (PUD) or condominium project. In a condominium project, it has no ownership interest in the common elements. In a PUD project, it holds title to the common elements."
    },
    {
        "term": "Homeowner's Insurance",
        "definition": "An insurance policy that combines personal liability insurance and hazard insurance coverage for a dwelling and its contents."
    },
    {
        "term": "Homeowner's Warranty",
        "definition": "A type of insurance often purchased by homebuyers that will cover repairs to certain items, such as heating or air conditioning, should they break down within the coverage period. The buyer often requests the seller to pay for this coverage as a condition of the sale, but either party can pay."
    },
    {
        "term": "HUD Median Income",
        "definition": "Median family income for a particular county or metropolitan statistical area (MSA), as estimated by the Department of Housing and Urban Development (HUD)."
    },
    {
        "term": "HUD-1 Settlement Statement",
        "definition": "A document that provides an itemized listing of the funds that were paid at closing. Items that appear on the statement include real estate commissions, loan fees, points, and initial escrow (impound) amounts. Each type of expense goes on a specific numbered line on the sheet. The totals at the bottom of the HUD-1 statement define the seller's net proceeds and the buyer's net payment at closing. It is called a HUD1 because the form is printed by the Department of Housing and Urban Development (HUD). The HUD1 statement is also known as the \"closing statement\" or \"settlement sheet.\""
    },
    {
        "term": "Implied Contract",
        "definition": "Agreement shown by acts and conduct rather than words"
    },
    {
        "term":"Ingress",
        "definition":"A way to enter property, access."
    },
    {
        "term": "Joint Tenancy",
        "definition": "A form of ownership or taking title to property which means each party owns the whole property and that ownership is not separate. In the event of the death of one party, the survivor owns the property in its entirety."
    },
    {
        "term": "Judgment",
        "definition": "A decision made by a court of law. In judgments that require the repayment of a debt, the court may place a lien against the debtor's real property as collateral for the judgment's creditor."
    },
    {
        "term": "Judicial Foreclosure",
        "definition": "A type of foreclosure proceeding used in some states that is handled as a civil lawsuit and conducted entirely under the auspices of a court. Other states use non-judicial foreclosure."
    },
    {
        "term": "Jumbo Loan",
        "definition": "A loan that exceeds Fannie Mae's and Freddie Mac's loan limits, currently at $227,150. Also called a nonconforming loan. Freddie Mac and Fannie Mae loans are referred to as conforming loans."
    },
    {
        "term": "Late Charge",
        "definition": "The penalty a borrower must pay when a payment is made a stated number of days. On a first trust deed or mortgage, this is usually fifteen days."
    },
    {
        "term": "Lease",
        "definition": "A written agreement between the property owner and a tenant that stipulates the payment and conditions under which the tenant may possess the real estate for a specified period of time."
    },
    {
        "term": "Leasehold Estate",
        "definition": "A way of holding title to a property wherein the mortgagor does not actually own the property but rather has a recorded long-term lease on it."
    },
    {
        "term": "Lease Option",
        "definition": "An alternative financing option that allows home buyers to lease a home with an option to buy. Each month's rent payment may consist of not only the rent, but an additional amount which can be applied toward the down payment on an already specified price."
    },
    {
        "term": "Legal Description",
        "definition": "A property description, recognized by law, that is sufficient to locate and identify the property without oral testimony."
    },
    {
        "term": "Lender",
        "definition": "A term which can refer to the institution making the loan or to the individual representing the firm. For example, loan officers are often referred to as \"lenders.\""
    },
    {
        "term": "Liabilities",
        "definition": "A person's financial obligations. Liabilities include long-term and short-term debt, as well as any other amounts that are owed to others."
    },
    {
        "term": "Liability Insurance",
        "definition": "Insurance coverage that offers protection against claims alleging that a property owner's negligence or inappropriate action resulted in bodily injury or property damage to another party. It is usually part of a homeowner's insurance policy."
    },
    {
        "term": "Lien",
        "definition": "A legal claim against a property that must be paid off when the property is sold. A mortgage or first trust deed is considered a lien."
    },
    {
        "term": "Life Cap",
        "definition": "For an adjustable-rate mortgage (ARM), a limit on the amount that the enterest rate can increase or decrease over the life of the mortgage."
    },
    {
        "term": "Line of Credit",
        "definition": "An agreement by a commercial bank or other financial institution to extend credit up to a certain amount for a certain time to a specified borrower."
    },
    {
        "term": "Liquid Asset",
        "definition": "A cash asset or an asset that is easily converted into cash."
    },
    {
        "term": "Listing",
        "definition": "A contract by which a principal employs an agent to do certain things for the principal."
    },
    {
        "term": "Loan",
        "definition": "A sum of borrowed money (principal) that is generally repaid with interest."
    },
    {
        "term": "Loan Officer",
        "definition": "Also referred to by a variety of other terms, such as lender, loan representative, loan \"rep,\" account executive, and others. The loan officer serves several functions and has various responsibilities: they solicit loans, they are the representative of the lending institution, and they represent the borrower to the lending institution."
    },
    {
        "term": "Loan Origination",
        "definition": "How a lender refers to the process of obtaining new loans."
    },
    {
        "term": "Loan Servicing",
        "definition": "After you obtain a loan, the company you make the payments to is \"servicing\" your loan. They process payments, send statements, manage the escrow/impound account, provide collection efforts on delinquent loans, ensure that insurance and property taxes are made on the property, handle pay-offs and assumptions, and provide a variety of other services."
    },
    {
        "term": "Loan-to-Value (LTV)",
        "definition": "The percentage relationship between the amount of the loan and the appraised value or sales price (whichever is lower)."
    },
    {
        "term": "Lock-In",
        "definition": "An agreement in which the lender guarantees a specified interest rate for a certain amount of time at a certain cost."
    },
    {
        "term": "Lock-In Period",
        "definition": "The time period during which the lender has guaranteed an interest rate to a borrower."
    },
    {
        "term": "Margin",
        "definition": "The difference between the interest rate and the index on an adjustable rate mortgage. The margin remains stable over the life of the loan. It is the index which moves up and down."
    },
    {
        "term": "Maturity",
        "definition": "The date on which the principal balance of a loan, bond, or other financial instrument becomes due and payable."
    },
    {
        "term": "Merged Credit Report",
        "definition": "A credit report which reports the raw data pulled from two or more of the major credit repositories. Contrast with a Residential Mortgage Credit Report (RMCR) or a standard factual credit report."
    },
    {
        "term": "Modification",
        "definition": "Occasionally, a lender will agree to modify the terms of your mortgage without requiring you t refinance. If any changes are made, it is called a modification."
    },
    {
        "term": "Mortgage",
        "definition": "A legal document that pledges a property to the lender as security for payment of a debt. Instead of mortgages, some states use First Trust Deeds."
    },
    {
        "term": "Mortgage Banker",
        "definition": "For a more complete discussion of mortgage banker, see \"Types of Lenders.\" A mortgage banker is generally assumed to originate and fund their own loans, which are then sold on the secondary market, usually to Fannie Mae, Freddie Mac, or Ginnie Mae. However, firms rather loosely apply this term to themselves, whether they are true mortgage bankers or simply mortgage brokers or correspondents."
    },
    {
        "term": "Mortgage Broker",
        "definition": "A mortgage company that originates loans, then places those loans with a variety of other lending institutions with whom they usually have pre-established relationships."
    },
    {
        "term": "Mortgagee",
        "definition": "The lender in a mortgage agreement."
    },
    {
        "term": "Mortgage Insurance (MI)",
        "definition": "Insurance that covers the lender against some of the losses incurred as a result of a default on a home loan. Often mistakenly referred to as PMI, which is actually the name of one of the larger mortgage insurers. Mortgage insurance is usually required in one form or another on all loans that have a loan-to-value higher than eighty percent. Mortgages above 80% LTV that call themselves \"No MI\" are usually a made at a higher interest rate. Instead of the borrower paying the mortgage insurance premiums directly, they pay a higher interest rate to the lender, which then pays the mortgage insurance themselves. Also, FHA loans and certain first-time homebuyer programs require mortgage insurance regardless of the loan-to-value."
    },
    {
        "term": "Mortgage Insurance Premium (MIP)",
        "definition": "The amount paid by a mortgagor for mortgage insurance, either to a government agency such as the Federal Housing Administration (FHA) or to a private mortgage insurance (MI) company."
    },
    {
        "term": "Mortgage Life and Disability Insurance",
        "definition": "A type of term life insurance often bought by borrowers. The amount of coverage decreases as the principal balance declines. Some policies also cover the borrower in the event of disability. In the event that the borrower dies while the policy is in force, the debt is automatically satisfied by insurance proceeds. In the case of disability insurance, the insurance will make the mortgage payment for a specified amount of time during the disability. Be careful to read the terms of coverage, however, because often the coverage does not start immediately upon the disability, but after a specified period, sometime forty-five days."
    },
    {
        "term": "Mortgagor",
        "definition": "The borrower in a mortgage agreement."
    },
    {
        "term": "Multidwelling Units",
        "definition": "Properties that provide separate housing units for more than one family, although they secure only a single mortgage."
    },
    {
        "term": "Negative Amortization",
        "definition": "Some adjustable rate mortgages allow the interest rate to fluctuate independently of a required minimum payment. If a borrower makes the minimum payment it may not cover all of the interest that would normally be due at the current interest rate. In essence, the borrower is deferring the interest payment, which is why this is called \"deferred interest.\" The deferred interest is added to the balance of the loan and the loan balance grows larger instead of smaller, which is called negative amortization."
    },
    {
        "term": "No Cash-Out Refinance",
        "definition": "A refinance transaction which is not intended to put cash in the hand of the borrower. Instead, the new balance is caculated to cover the balance due on the current loan and any costs associated with obtaining the new mortgage. Often referred to as a \"rate and term refinance.\""
    },
    {
        "term": "No-Cost Loan",
        "definition": "Many lenders offer loans that you can obtain at \"no cost.\" You should inquire whether this means there are no \"lender\" costs associated with the loan, or if it also covers the other costs you would normally have in a purchase or refinance transactions, such as title insurance, escrow fees, settlement fees, appraisal, recording fees, notary fees, and others. These are fees and costs which may be associated with buying a home or obtaining a loan, but not charged directly by the lender. Keep in mind that, like a \"no-point\" loan, the interest rate will be higher than if you obtain a loan that has costs associated with it."
    },
    {
        "term": "Note",
        "definition": "A legal document that obligates a borrower to repay a mortgage loan at a stated interest rate during a specified period of time."
    },
    {
        "term": "Note Rate",
        "definition": "The interest rate stated on a mortgage note."
    },
    {
        "term": "Notice of Default",
        "definition": "A formal written notice to a borrower that a default has occurred and that legal action may be taken."
    },
    {
        "term": "Original Principal Balance",
        "definition": "The total amount of principal owed on a mortgage before any payments are made."
    },
    {
        "term": "Origination Fee",
        "definition": "On a government loan the loan origination fee is one percent of the loan amount, but additional points may be charged which are called \"discount points.\" One point equals one percent of the loan amount. On a conventional loan, the loan origination fee refers to the total number of points a borrower pays."
    },
    {
        "term": "Owner Financing",
        "definition": "A property purchase transaction in which the property seller provides all or part of the financing."
    },
    {
        "term": "Partial Payment",
        "definition": "A payment that is not sufficient to cover the scheduled monthly payment on a mortgage loan. Normally, a lender will not accept a partial payment, but in times of hardship you can make this request of the loan servicing collection department."
    },
    {
        "term": "Payment Change Date",
        "definition": "The date when a new monthly payment amount takes effect on an adjustable-rate mortgage (ARM) or a graduated-payment mortgage (GPM). Generally, the payment change date occurs in the month immediately after the interest rate adjustment date."
    },
    {
        "term": "Periodic Payment Cap",
        "definition": "For an adjustable-rate mortgage where the interest rate and the minimum payment amount fluctuate independently of one another, this is a limit on the amount that payments can increase or decrease during any one adjustment period."
    },
    {
        "term": "Periodic Rate Cap",
        "definition": "For an adjustable-rate mortgage, a limit on the amount that the interest rate can increase or decrease during any one adjustment period, regardless of how high or low the index might be."
    },
    {
        "term": "Personal Property",
        "definition": "Any property that is not real property."
    },
    {
        "term": "PITI",
        "definition": "This stands for principal, interest, taxes and insurance. If you have an \"impounded\" loan, then your monthly payment to the lender includes all of these and probably includes mortgage insurance as well. If you do not have an impounded account, then the lender still calculates this amount and uses it as part of determining your debt-to-income ratio."
    },
    {
        "term": "PITI Reserves",
        "definition": "A cash amount that a borrower must have on hand after making a down payment and paying all closing costs for the purchase of a home. The principal, interest, taxes, and insurance (PITI) reserves must equal the amount that the borrower would have to pay for PITI for a predefined number of months."
    },
    {
        "term": "Planned Unit Development (PUD)",
        "definition": "A type of ownership where individuals actually own the building or unit they live in, but common areas are owned jointly with the other members of the development or association. Contrast with condominium, where an individual actually owns the airspace of his unit, but the buildings and common areas are owned jointly with the others in the development or association."
    },
    {
        "term": "Point",
        "definition": "A point is 1 percent of the amount of the mortgage."
    },
    {
        "term": "Power of Attorney",
        "definition": "A legal document that authorizes another person to act on one's behalf. A power of attorney can grant complete authority or can be limited to certain acts and/or certain periods of time."
    },
    {
        "term": "Pre-Approval",
        "definition": "A loosely used term which is generally taken to mean that a borrower has completed a loan application and provided debt, income, and savings documentation which an underwriter has reviewed and approved. A pre-approval is usually done at a certain loan amount and making assumptions about what the interest rate will actually be at the time the loan is actually made, as well as estimates for the amount that will be paid for property taxes, insurance and others. A pre-approval applies only to the borrower. Once a property is chosen, it must also meet the underwriting guidelines of the lender. Contrast with pre-qualification"
    },
    {
        "term": "Prepayment",
        "definition": "Any amount paid to reduce the principal balance of a loan before the due date. Payment in full on a mortgage that may result from a sale of the property, the owner's decision to pay off the loan in full, or a foreclosure. In each case, prepayment means payment occurs before the loan has been fully amortized."
    },
    {
        "term": "Prepayment Penalty",
        "definition": "A fee that may be charged to a borrower who pays off a loan before it is due."
    },
    {
        "term": "Pre-Qualification",
        "definition": "This usually refers to the loan officer's written opinion of the ability of a borrower to qualify for a home loan, after the loan officer has made inquiries about debt, income, and savings. The information provided to the loan officer may have been presented verbally or in the form of documentation, and the loan officer may or may not have reviewed a credit report on the borrower."
    },
    {
        "term": "Prime Rate",
        "definition": "The interest rate that banks charge to their preferred customers. Changes in the prime rate are widely publicized in the news media and are used as the indexes in some adjustable rate mortgages, especially home equity lines of credit. Changes in the prime rate do not directly affect other types of mortgages, but the same factors that influence the prime rate also affect the interest rates of mortgage loans."
    },
    {
        "term": "Principal",
        "definition": "The amount borrowed or remaining unpaid. The part of the monthly payment that reduces the remaining balance of a mortgage."
    },
    {
        "term": "Principal Balance",
        "definition": "The outstanding balance of principal on a mortgage. The principal balance does not include interest or any other charges. See remaining balance."
    },
    {
        "term": "Principal, Interest, Taxes, and Insurance (PITI)",
        "definition": "The four components of a monthly mortgage payment on impounded loans. Principal refers to the part of the monthly payment that reduces the remaining balance of the mortgage. Interest is the fee charged for borrowing money. Taxes and insurance refer to the amounts that are paid into an escrow account each month for property taxes and mortgage and hazard insurance."
    },
    {
        "term":"Private Grant",
        "definition":"The granting of privat property to other private persons"
    },
    {
        "term": "Private Mortgage Insurance (PMI)",
        "definition": "Mortgage insurance that is provided by a private mortgage insurance company to protect lenders against loss if a borrower defaults. Most lenders generally require MI for a loan with a loan-to-value (LTV) percentage in excess of 80 percent"
    },
    {
        "term": "Promissory Note",
        "definition": "A written promise to repay a specified amount over a specified period of time."
    },
    {
        "term": "Public Auction",
        "definition": "A meeting in an announced public location to sell property to repay a mortgage that is in default."
    },
    {
        "term": "Planned Unit Development (PUD)",
        "definition": "A project or subdivision that includes common property that is owned and maintained by a homeowners' association for the benefit and use of the individual PUD unit owners."
    },
    {
        "term": "Purchase Agreement",
        "definition": "A written contract signed by the buyer and seller stating the terms and conditions under which a property will be sold."
    },
    {
        "term": "Purchase Money Transaction",
        "definition": "The acquisition of property through the payment of money or its equivalent."
    },
    {
        "term": "Qualifying Ratios",
        "definition": "Calculations that are used in determining whether a borrower can qualify for a mortgage. There are two ratios. The \"top\" or \"front\" ratio is a calculation of the borrower's monthly housing costs (principle, taxes, insurance, mortgage insurance, homeowner's association fees) as a percentage of monthly income. The \"back\" or \"bottom\" ratio includes housing costs as will as all other monthly debt. [ ]"
    },
    {
        "term": "Quitclaim Deed",
        "definition": "A deed that transfers without warranty whatever interest or title a grantor may have at the time the conveyance is made."
    },
    {
        "term": "Rate Lock",
        "definition": "A commitment issued by a lender to a borrower or other mortgage originator guaranteeing a specified interest rate for a specified period of time at a specific cost."
    },
    {
        "term": "Ratified",
        "definition":"Approved."
    },
    {
        "term": "Real Estate Agent",
        "definition": "A person licensed to negotiate and transact the sale of real estate."
    },
    {
        "term": "Real Estate Settlement Procedures Act (RESPA)",
        "definition": "A consumer protection law that requires lenders to give borrowers advance notice of closing costs."
    },
    {
        "term": "Real Property",
        "definition": "Land and appurtenances, including anything of a permanent nature such as structures, trees, minerals, and the interest, benefits, and inherent rights thereof."
    },
    {
        "term": "Realtor�",
        "definition": "A real estate agent, broker or an associate who holds active membership in a local real estate board that is affiliated with the National Association of Realtors."
    },
    {
        "term": "Recorder",
        "definition": "The public official who keeps records of transactions that affect real property in the area. Sometimes known as a \"Registrar of Deeds\" or \"County Clerk.\""
    },
    {
        "term": "Recording",
        "definition": "The noting in the registrar's office of the details of a properly executed legal document, such as a deed, a mortgage note, a satisfaction of mortgage, or an extension of mortgage, thereby making it a part of the public record."
    },
    {
        "term": "Refinance Transaction",
        "definition": "The process of paying off one loan with the proceeds from a new loan using the same property as security."
    },
    {
        "term": "Remaining Balance",
        "definition": "The amount of principal that has not yet been repaid. See principal balance."
    },
    {
        "term": "Remaining Term",
        "definition": "The original amortization term minus the number of payments that have been applied."
    },
    {
        "term": "Rent LossInsurance",
        "definition": "Insurance that protects a landlord against loss of rent or rental value due to fire or other casualty that renders the leased premises unavailable for use and as a result of which the tenant is excused from paying rent."
    },
    {
        "term": "Repayment Plan",
        "definition": "An arrangement made to repay delinquent installments or advances."
    },
    {
        "term": "Replacement Reserve Fund",
        "definition": "A fund set aside for replacement of common property in a condominium, PUD, or cooperative project -- particularly that which has a short life expectancy, such as carpeting, furniture, etc."
    },
    {
        "term": "Revolving Debt",
        "definition": "A credit arrangement, such as a credit card, that allows a customer to borrow against a preapproved line of credit when purchasing goods and services. The borrower is billed for the amount that is actually borrowed plus any interest due."
    },
    {
        "term": "Right of First Refusal",
        "definition": "A provision in an agreement that requires the owner of a property to give another party the first opportunity to purchase or lease the property before he or she offers it for sale or lease to others."
    },
    {
        "term": "Right of Ingress or Egress",
        "definition": "The right to enter or leave designated premises."
    },
    {
        "term": "Right of Survivorship",
        "definition": "In joint tenancy, the right of survivors to acquire the interest of a deceased joint tenant."
    },
    {
        "term": "Sale-Leaseback",
        "definition": "A technique in which a seller deeds property to a buyer for a consideration, and the buyer simultaneously leases the property back to the seller."
    },
    {
        "term": "Second Mortgage",
        "definition": "A mortgage that has a lien position subordinate to the first mortgage."
    },
    {
        "term": "Secondary Market",
        "definition": "The buying and selling of existing mortgages, usually as part of a \"pool\" of mortgages."
    },
    {
        "term": "Secured Loan",
        "definition": "A loan that is backed by collateral."
    },
    {
        "term": "Security",
        "definition": "The property that will be pledged as collateral for a loan."
    },
    {
        "term": "Seller Carry-Back",
        "definition": "An agreement in which the owner of a property provides financing, often in combination with an assumable mortgage."
    },
    {
        "term": "Servicer",
        "definition": "An organization that collects principal and interest payments from borrowers and manages borrowers' escrow accounts. The servicer often services mortgages that have been purchased by an investor in the secondary mortgage market."
    },
    {
        "term": "Servicing",
        "definition": "The collection of mortgage payments from borrowers and related responsibilities of a loan servicer."
    },
    {
        "term": "Settlement Statement",
        "definition": "See HUD1 Settlement Statement"
    },
    {
        "term": "Subdivision",
        "definition": "A housing development that is created by dividing a tract of land into individual lots for sale or lease."
    },
    {
        "term": "Subordinate Financing",
        "definition": "Any mortgage or other lien that has a priority that is lower than that of the first mortgage."
    },
    {
        "term": "Survey",
        "definition": "A drawing or map showing the precise legal boundaries of a property, the location of improvements, easements, rights of way, encroachments, and other physical features."
    },
    {
        "term": "Sweat Equity",
        "definition": "Contribution to the construction or rehabilitation of a property in the form of labor or services rather than cash."
    },
    {
        "term":"Tender",
        "definition": "An offer by one of the parties to a contract to carry out his or her part of the contract"
    },
    {
        "term": "Tenancy in Common",
        "definition": "As opposed to joint tenancy, when there are two or more individuals on title to a piece of property, this type of ownership does not pass ownership to the others in the event of death."
    },
    {
        "term": "Third-party Origination",
        "definition": "A process by which a lender uses another party to completely or partially originate, process, underwrite, close, fund, or package the mortgages it plans to deliver to the secondary mortgage market."
    },
    {
        "term": "Title",
        "definition": "A legal document evidencing a person's right to or ownership of a property."
    },
    {
        "term": "Title Company",
        "definition": "A company that specializes in examining and insuring titles to real estate."
    },
    {
        "term": "Title Insurance",
        "definition": "Insurance that protects the lender (lender's policy) or the buyer (owner's policy) against loss arising from disputes over ownership of a property."
    },
    {
        "term": "Title Search",
        "definition": "A check of the title records to ensure that the seller is the legal owner of the property and that there are no liens or other claims outstanding."
    },
    {
        "term": "Transfer of Ownership",
        "definition": "Any means by which the ownership of a property changes hands. Lenders consider all of the following situations to be a transfer of ownership: the purchase of a property \"subject to\" the mortgage, the assumption of the mortgage debt by the property purchaser, and any exchange of possession of the property under a land sales contract or any other land trust device."
    },
    {
        "term": "Transfer Tax",
        "definition": "State or local tax payable when title passes from one owner to another."
    },
    {
        "term": "Treasury Index",
        "definition": "An index that is used to determine interest rate changes for certain adjustable-rate mortgage (ARM) plans. It is based on the results of auctions that the U.S. Treasury holds for its Treasury bills and securities or is derived from the U.S. Treasury's daily yield curve, which is based on the closing market bid yields on actively traded Treasury securities in the over-the-counter market. [ ]"
    },
    {
        "term": "Truth-in-Lending",
        "definition": "A federal law that requires lenders to fully disclose, in writing, the terms and conditions of a mortgage, including the annual percentage rate (APR) and other charges."
    },
    {
        "term": "Two-Step Mortgage",
        "definition": "An adjustable-rate mortgage (ARM) that has one interest rate for the first five or seven years of its mortgage term and a different interest rate for the remainder of the amortization term."
    },
    {
        "term": "Two- to four-Family Property",
        "definition": "A property that consists of a structure that provides living space (dwelling units) for two to four families, although ownership of the structure is evidenced by a single deed."
    },
    {
        "term": "Trustee",
        "definition": "A fiduciary who holds or controls property for the benefit of another."
    },
    {
        "term": "VA Mortgage",
        "definition": "A mortgage that is guaranteed by the Department of Veterans Affairs (VA)."
    },
    {
        "term": "Vested",
        "definition": "Having the right to use a portion of a fund such as an individual retirement fund. For example, individuals who are 100 percent vested can withdraw all of the funds that are set aside for them in a retirement fund. However, taxes may be due on any funds that are actually withdrawn."
    },
    {
        "term": "Veterans Administration (VA)",
        "definition": "An agency of the federal government that guarantees residential mortgages made to eligible veterans of the military services. The guarantee protects the lender against loss and thus encourages lenders to make mortgages to veterans."
    },

    {
        "term": "Undue Influence",
        "definition": "Using unfair advantage to get agreement in accepting a contract.",
        "category":"legal"
    },
    {
        "term": "Estate",
        "definition": "A legal interest in land that defines the nature, degree, extent and duration of a persons ownership in land.",
        "category":"legal"
    },
    {
        "term": "Unilateral Contract",
        "definition": "An agreement in which one party promises to pay consideration for the performance of an act by another party. The party promising to pay consideration is not legally obligated to act unless the party promising to perform, does so.",
        "category":"legal"
    },
    {
        "term": "Ratification",
        "definition": "The approval of a previously authorized act, peformed on behalf of a person, which makes the act valid and legally binding.",
        "category":"legal"
    },
    {
        "term": "Misrepresentation",
        "definition": "An innoent or negligent misstatement of material fact which causes someone loss or harm.",
        "category":"legal"
    },
    {
        "term": "Condidtion Precedent",
        "definition": "A condition which requires something to occur before a transaction becomes absolute and enforceable. For example, a sale that is contignent on the buyer obtaining financing",
        "category":"legal"
    },
    {
        "term": "Contract",
        "definition": "An agreement to do or not do a certain thing.",
        "category":"legal"
    },
    {
        "term": "Alienate",
        "definition": "Transfer ownership or sell.",
        "category":"legal"
    },
    {
        "term": "Real Estate Law",
        "definition": "The law that affects the licensing and conduct of real estate agents.",
        "category":"legal"
    },
    {
        "term": "Real Property",
        "definition": "Land, anything affixed to the land, anything appurtenant to the land, anything immovable by law.",
        "category":"legal"
    },
    {
        "term": "Sublease",
        "definition": "Transfer less than the entire household, with the original lessee being primarily liable.",
        "category":"legal"
    },
    {
        "term": "Fixture",
        "definition": "Personal property that has become affixed to real estate.",
        "category":"legal"
    },
    {
        "term": "Patents",
        "definition": "Deeds used by the U.S. government when confirming or transferring ownership to private parties.",
        "category":"legal"
    },
    {
        "term": "Patent Deed",
        "definition": "A deed fiven by the government to a private individual as evidence of transfer of title from the government to the public person.",
        "category":"legal"
    },
    {
        "term": "Appurtencance",
        "definition": "Those rights, privaleges and improvements that belong to and pass with the transfer of real property, but are not necissarily a part of the actual propery.",
        "category":"legal"
    },
    {
        "term": "Conveyance",
        "definition": "The transfer of title to land from one person to another by use of a written instrument.",
        "category":"legal"
    },
    {
        "term": "Fiduciary",
        "definition": "A relationship that implies a position of trus or confidence.",
        "category":"legal"
    },
    {
        "term": "Meridian",
        "definition": "A survey line running north and south, used as a refrence when mapping land.",
        "category":"legal"
    },
    {
        "term": "Avulsion",
        "definition": "The sudden washing or tearing away of the land by action of water.",
        "category":"legal"
    },
    {
        "term": "Subagent",
        "definition": "An agent of a person who is already acting as an agent for a principal.",
        "category":"legal"
    },
    {
        "term": "Eegress",
        "definition": "A way to exit the property.",
        "category":"legal"
    },
    {
        "term": "Lis Pendens",
        "definition": "A recorded notice that indicates pending litigation on a property that prevents conveyance or any other transfer of ownership.",
        "category":"legal"
    },
    {
        "term": "Estoppel",
        "definition": "A legal doctorine which prevents a person from denying something to be true or a fact, if the denial is contrary to previous statements or actions made by that same person.",
        "category":"legal"
    },
    {
        "term": "Littoral",
        "definition": "Land bordering a lake, ocean or sea as opposed to a land bordering a stream or river(running water).",
        "category":"legal"
    },
    {
        "term": "Erosion",
        "definition": "The gradual wearing away of land by natural process.",
        "category":"legal"
    },
    {
        "term": "Adverse Possession",
        "definition": "Aquiring title to property by continued posession and payment of taxes.",
        "category":"legal"
    },
    {
        "term": "Baseline",
        "definition": "A survey line running east to west and used as a reference when mapping land.",
        "category":"legal"
    },
    {
        "term": "Easement",
        "definition": "The right to use another's land for a specified purpose; sometimes known as a right-of-way.",
        "category":"legal"
    },
    {
        "term": "Abrogation",
        "definition": "The revocation, recission, or anulling of a contract by mutual consent of the parties to the contract, or for cause by either party to the contract.",
        "category":"legal"
    },
    {
        "term": "Metes and Bounds",
        "definition": "A method of land description in which the dimensions of the property are measured by distance and direction.",
        "category":"legal"
    },
    {
        "term": "Reliction",
        "definition": "Occurs when land that has been covered by water is exposed by the receding of the water.",
        "category":"legal"
    },
    {
        "term": "Consideration",
        "definition": "Something of value, such as money, a promise, proerty or personal services.",
        "category":"legal"
    },
    {
        "term": "Unilateral Recision",
        "definition": "Legal action taken to repeal a contract by one party when the other party has breached a contract.",
        "category":"legal"
    },
    {
        "term": "Voidable",
        "definition": "An agreement which is valid an enforceable on its face, but may be rejected by one or more of the parties.",
        "category":"legal"
    },
    {
        "term": "Definite and Certain",
        "definition": "Precise acts to be performed are to be clearly stated.",
        "category":"legal"
    },
    {
        "term": "Bundle of Rights",
        "definition": "An ownership, concept describing all the legal rights that attach to the ownership of property.`",
        "category":"legal"
    },
    {
        "term": "Public Dedication",
        "definition": "When private property is intended for public use, it may be acquired in this manner.",
        "category":"legal"
    },
    {
        "term": "Alluvial Deposit",
        "definition": "Sand or mud carried by water and deposited on land.",
        "category":"legal"
    },
    /////////////////////////////////
    {
        "term": "Mutual Consent",
        "definition": "Sgreement to the provisions of a contract by the parties involved; a mutual willingness to enter into a contract.",
        "category":"legal"
    },
    {
        "term": "Breach of Contract",
        "definition": "A failure to peform on part or all of the terms and conditions of a contract.",
        "category":"legal"
    },
    {
        "term": "Void",
        "definition": "An agreement which is totally absent of legal effect.",
        "category":"legal"
    },
    {
        "term": "Oferee",
        "definition": "The party receiving an offer",
        "category":"legal"
    },
    {
        "term": "Bill of Sale",
        "definition": "A written agreement used to transfer ownership in personal property.",
        "category":"legal"
    },
    {
        "term": "Encroachment",
        "definition": "The placement of permanent improvements on adjacent property owned by another.",
        "category":"legal"
    },
    {
        "term": "Accession",
        "definition": "The acquisition of title to additional land or to improvements as a result of the annexation of fixtures or as a result of alluvial deposits aling the banks of streams by accretion.",
        "category":"legal"
    },
    {
        "term": "Revoice",
        "definition": "Recall and make void.",
        "category":"legal"
    },
    {
        "term": "Township",
        "definition": "A land description used in the U.S. Public Land Survey System consisting of a six-by-six mile area containing 36 sections each one mile square."
    },
    {
        "term": "Customer",
        "definition": "A prospective buyer of real estate."
    },
    {
        "term": "Life Estate",
        "definition": "An estate that is limited in duration to life of its owner or the life of some other chosen person."
    },
    {
        "term": "Easment in Gross",
        "definition": "An easement that is not appertunent to any one parcel, for example public utilities."
    },
    {
        "term": "Real Estate Salesperson",
        "definition": "Someone holding a real estate icense and employed by a licensed real estate broker. In some states the salesperson is called a sales agent or sales associate."
    },
    {
        "term": "Section",
        "definition": "An area of land used in the U.S. Public Land Survey method of land description; a land area of one square mile or 640 acres; 1/36 of a township."
    },
    {
        "term": "Conversion",
        "definition": "An appropriation of property belonging to another."
    },
    {
        "term": "Less-Than-Freehold Estate",
        "definition": "A leasehol estate that is considered to exist for a definite period of time or successive periods of time until termination."
    },
    {
        "term": "Homestead",
        "definition": "Status provided to a homeowner's primcipal residence that protects the home against judgements."
    },
    {
        "term": "Suspend",
        "definition": "Temporarily make ineffective."
    },
    {
        "term": "Trade Fixture",
        "definition": "An article of personal property affixed to leased property by the tenant as a necessary part of business; may be removed by tenant as a personal property "
    },
    {
        "term": "Dual Agent",
        "definition": "An agent ho represents both parties in a transaction."
    },
    {
        "term": "Linear Foot",
        "definition": "A measurement one foot or twelve inches in length as contrasted to a square foot or a cubic foot."
    },
    {
        "term": "Accretion",
        "definition": "A build-up of soil by natural causes on property bordering a river, lake or ocean."
    },
    {
        "term": "Forebearance",
        "definition": "Refraining from action by a creditor against the debt owed by a borrower after the debt has become due."
    },
    {
        "term": "Specific Performance",
        "definition": "An action brought in a cour to compel a party to carry out the terms of a contract."
    },
    {
        "term": "Unenforceable",
        "definition": "A contract that was valid when made, but either cannot be proved or will not be enforced by a court."
    },
    {
        "term": "Contractual Intent",
        "definition": "Intention to be bound by an agreement, thus preventing jokes and jests from becoming valid contracts. "
    },
    {
        "term": "Chattel",
        "definition": "Personal property."
    },
    {
        "term": "Undivided Interest",
        "definition": "That interest a co-owner has in property, which carries with it the right to posession and use of the whole property, along with the co-owners."
    },
    {
        "term": "Grant Deed",
        "definition": "A type of deed in which the grantor warrants that he or she has not previously conveyed the property being granted, that he or she has not encumbered the property except disclosed, and that he or she will convey to the grantee any title to the property acquired later."
    },
    {
        "term": "Novation",
        "definition": "The substitution by agreeement of a new obligation for an existing one."
    },
    {
        "term": "Natural Person",
        "definition": "An individual; a private person as distinguished from an entity such as a corporation or a partnership."
    },
    {
        "term": "Revocation",
        "definition": "The cancelling of an offer to contract by the person making the original offer."
    },
    {
        "term": "Timely Manner",
        "definition": "An act must be performed within certain time limits as described in a contract."
    },
    {
        "term": "Present Interest",
        "definition": "An interest in real property that can be exercised today."
    },
    {
        "term": "Executory Contract",
        "definition": "A contract in which an obligation to perform exists on one or both sides of the contract."
    },
    {
        "term": "Statute of Limitations",
        "definition": "A statute limiting the period of time during which legal action may be taken on a certain issue."
    },
    {
        "term": "Land Grant",
        "definition": "A grant of public lands by the government. Usually for roads, railroads, or agricultural colleges."
    },
    {
        "term": "Offer",
        "definition": "A presentation or proposal for acceptance to a form of contract."
    },
    {
        "term": "Acceptance",
        "definition": "An unqualified aggreement to the terms of an offer."
    },
    {
        "term": "Estate in Fee",
        "definition": "A freehold estate that is the most complete form of ownership of real property; also know as a fee, fee simple or fee simple absolute. It is an estate of inheritence."
    },
    {
        "term": "Executed Contract",
        "definition": "A contract in which the obligations have been performed on both sides of the contract and nothing is left to be completed."
    },
    {
        "term": "Action",
        "definition": "A lawsuit brought to court."
    },
    {
        "term": "Puffing",
        "definition": "Exaggerated comments or opinions not made as representations of facts, and thus not grounds for misrepresentations."
    },
    {
        "term": "Offeror",
        "definition": "The party making an offer"
    },
    {
        "term": "Counteroffer",
        "definition": "The rejection of an original offer that becomes a new offer."
    },
    {
        "term": "Future Interest",
        "definition": "An interest in real property that cannot be exercised today, but that might be exercised in the future."
    },
    {
        "term": "Execute",
        "definition": "To perform or complete, to sign."
    },
    {
        "term": "Recission",
        "definition": "Legal action taken to repeal a contract either by mutual consent of the parties or by one party when the other party has breached a contract."
    },
    {
        "term": "Condition Subsequent",
        "definition": "A condition which, if it occurs at some point in the future, can cause a property to revert to the grantor: for example, a requirement in a grant deed that a buyer must never use the property for anything other than a private residence."
    },
    {
        "term": "Express Contract",
        "definition": "The parties declare the term and put their intentions in words, either oral or written."
    },
    {
        "term": "Convey",
        "definition": "To transfer ownership of title."
    },
    {
        "term": "Real Estate Associate Licensee",
        "definition": "A person with a real estate license who is employed or sponsered by a real estate broker."
    },
    {
        "term": "Riparian Rights",
        "definition": "The rights of a landowner whose land is net to a natural watercourse to a reasonable use of whatever water flows past the property."
    },
    {
        "term": "Comingling",
        "definition": "To deposit client funds in the broker's personal account."
    },
    {
        "term": "Freehold Estate",
        "definition": "An estate in real property which continues for an indefinite period of time."
    },
    {
        "term": "Severalty",
        "definition": "Ownershp of real property by one person or entity."
    },
    {
        "term": "Ethics",
        "definition": "A set of principles or values by which an individual guides his or her own behavior and judges that of others."
    },
    {
        "term": "Monument",
        "definition": "A fixed landmark used in a metes and bounds land descriptions."
    },
    {
        "term": "Agency",
        "definition": "A relationship in which one party (principal) authorizes another party (agent) to act as the principal's representative in dealing with third parties."
    },
    {
        "term": "Posessory Interest",
        "definition": "Present right to physically occupy land and exclude others from the same land."
    },
    {
        "term": "License",
        "definition": "Precission to use a property which may be revoked at any time."
    },
    {
        "term": "Police Power",
        "definition": "The power of the state to pass laws, within lawful limits, that promote order, safety, health, morals and general welfare of its citizens."
    },
    {
        "term": "Personal Property",
        "definition": "Anything movable that is not real property."
    },
    {
        "term": "Fee Simple Defeasable",
        "definition": "An estate in which the holder has a fee simple title that is subject to return the grantor if a specified condition occurs; also known as a fee simple qualified."
    },
    {
        "term": "Agent",
        "definition": "A person who acts for and in the place of another, called a principal for the purpose of affecting the principal's legal relationship with third persons."
    },
    {
        "term": "Instrument",
        "definition": "A written legal document setting forth the rights and liabilities of the parties involved."
    },
    {
        "term": "Property",
        "definition": "The rights or interests an owner has in something owned."
    },
    {
        "term": "Arm's Length Transaction",
        "definition": ""
    },

    /////////
    {
        "term": "Estate",
        "definition": "A legal interest in land that defines the nature, degree, extent and duration of a persons's ownership in land"
    },
    {
        "term": "Unilateral Contract",
        "definition": "An agreement in which one party promises to pay consideration for the performance of an act by another party. The party promising to pay consideration is not legally obligated to act unless the party promising to perform the act does so."
    },
    {
        "term": "Undue Influence",
        "definition": "Using unfair advantage to get agreement in accepting a contract."
    },
    {
        "term": "Attorney-in-fact",
        "definition": "A competent and disinterested person who is authorized by another person to act in his or her place in legal matters."
    },
    {
        "term": "Tender",
        "definition": "An offer by one of the parties to a contract to carry out his or her part of the contract."
    },
    {
        "term": "Assignee",
        "definition": "The person to whom a claim, benefit or right in property is made."
    },
    {
        "term": "Ingress",
        "definition": "A way to enter property; access."
    },
    {
        "term": "Implied Contract",
        "definition": "Agreement shown by acts and conduct rather than words."
    },
    {
        "term": "Doctorine of Correlative User",
        "definition": "Owners may use a reasonable amount of the total water supply for beneficial use."
    },
    {
        "term": "Duress",
        "definition": "The use of force to get an agreement in accepting a contract."
    },
    {
        "term": "Ratified",
        "definition": "Approved."
    },
    {
        "term": "Listing",
        "definition": "A contract by which a principal employs an agent to do certain things for the principal."
    },
    {
        "term": "Assignment",
        "definition": "The transfer of a claim benefit or right in property from one person to another person."
    },
    {
        "term": "Private Grant",
        "definition": "The granting of private property to other private persons."
    },
    {
        "term": "Ratification",
        "definition": "The approval of a previously authorized act, performed on behalf of a person, which makes the act valid and legally binding."
    },
    {
        "term": "Misrepresentation",
        "definition": "An innocent or negligent fact wich causes someone loss or harm."
    },
    {
        "term": "Condition Precedent",
        "definition": "A condition wich requires something to occur before a transaction becomes absolute and enforceable: for example, a sale that is contignent on the buyer obtaining financing."
    },
    {
        "term": "Contract",
        "definition": "An agreement to do or not do a certain thing."
    },
    {
        "term": "Alientate",
        "definition": "Transfer ownership or sell."
    },
    {
        "term": "Real Estate Law",
        "definition": "The law that affects the licensing and conduct of real estate agents."
    },
    {
        "term": "Real Property",
        "definition": "Land; anything affixed to the land; anything apppurtenant to the land; anything immovable by law."
    },
    {
        "term": "Sublease",
        "definition": "Transfer less than the entire leashold, with the original lessee being primarily liable."
    },
    {
        "term": "Fixture",
        "definition": "Personal property that has become affixed to real estate."
    },
    {
        "term": "Patents",
        "definition": "Deeds use by the U.S. government when confirming or transferring ownership to private parties."
    },
    {
        "term": "Patent Deed",
        "definition": "A deed given by the government to a private individual as evidence of transfer of title from government to the public person."
    },
    {
        "term": "Appertunence",
        "definition": "Those right, priveleges, and improvements that belong to and pass with the transfer of real property, but are not necissarily a part of the actual property."
    },
    {
        "term": "Conveyance",
        "definition": "The transfer of title to the land from one person to another by use of a written instrument."
    },
    {
        "term": "Fiduciary",
        "definition": "A relationship that implies a position of trust or confidence."
    },
    {
        "term": "Meridian",
        "definition": "A survey line running north and south, use as a reference when mapping land."
    },
    {
        "term": "Avulsion",
        "definition": "The sudden washing or tearing away of the land by action of water."
    },
    {
        "term": "Subagent",
        "definition": "An agent of a person who is already acting as an agent for a principal."
    },
    {
        "term": "Egress",
        "definition": "A way to exit property."
    },
    {
        "term": "Lis Pendens",
        "definition": "A recorded notice that indicates a pending litigation on a property that prevents conveyance or any other transfer of ownership."
    },
    {
        "term": "Estoppel",
        "definition": "A legal doctrine which prevents a person from denying something to be true or fact.If the denial is contrary to previous statements or actions made by that same person."
    },
    {
        "term": "Litoral",
        "definition": "Land bordering a lake, ocean or sea as opposed to a land bordering a stream or river (running water)."
    },
    {
        "term": "Erosion",
        "definition": "The gradual wearing away of land by natural process."
    },
    {
        "term": "Adverse Possession",
        "definition": "Aquiring title to property by continued posession and payment of taxes."
    },
    {
        "term": "Baseine",
        "definition": "A survey line running east to west, and used as a reference when mapping land."
    },
    {
        "term": "Easement",
        "definition": "The right to use another's land for a specified purpose; somethimes known as a right-of-way."
    },
    {
        "term": "Abrogation",
        "definition": "The revocation, recission, or annuling of a contract by mutual consent of the parties to the contract, or for cause by either party to the contract."
    },
    {
        "term": "Metes and Bounds",
        "definition": "A method of land description in which the dimensions of the property are measured by distance and direction."
    },
    {
        "term": "Reliction",
        "definition": "Occurs when land that has been covered by water is exposed by the receding of the water."
    },
    {
        "term": "Consideration",
        "definition": "Something of value, such as money, a promise, property, or personal services."
    },
    {
        "term": "Unilateral Recission",
        "definition": "Legal action taken to repeal a contract by one party when the other party has breached a contract."
    },
    {
        "term": "Voidable",
        "definition": "An agreement which is valid and enforceable on its face, but may be rejected by one or more of the parties."
    },
    {
        "term": "Definite and Certain",
        "definition": "Precise acts to be performed are to be clearly stated."
    },
    {
        "term": "Bundle of Rights",
        "definition": "An ownership concept describing all the legal rights that attach to the ownership of real property."
    }
];
export default terms;