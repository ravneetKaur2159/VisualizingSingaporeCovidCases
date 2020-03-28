import pandas as pd
import json

cases_df = pd.read_csv("data/covid100_recovered.csv")

list_of_dates = []
for index, row in cases_df.iterrows():
    each_case_info = []
    each_case_info.append(row['Date of Admission to Hospital'])
    each_case_info.append(row['Date Confirmed Positive'])
    each_case_info.append(row['Date Discharged'])
    list_of_dates.append(each_case_info)

print(list_of_dates)

with open("top100cases.json", "w") as outfile:
    outfile.write(json.dumps(list_of_dates))