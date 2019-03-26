var __SETTINGS__ = (function(){
return {
    sections: {
        dates: {title1: "Dates",title2:"[Date Received] Field"},
        address: {title1: "Address",title2: "Caution: Some locations have multiple addresses"},
        calltypes: {title1: "Call Types",title2: "[Call Type] and [Complaint Type] Fields"},
        callsholding:{title1: "Calls Holding",title2: "Time Received to Time First Unit is Onscene"},
        resptimes:{title1: "Response Times",title2: "Read details to get further insights"},
        mutualaid:{title1: "Mutual Aid (Fire)",title2: "Mutual aid fire calls"},
        geographic:{title1: "Geographic",title2:"Calls that occurred within a geographic boundary"},
        other:{title1: "Other",title2: "Other Parameters"},
        unitsresponding:{title1:"Which Units Responded",title2: "Units"},
        unitsavail:{title1:"Units On-Duty / Availabe",title2: "From Unit-Log. Based on timestamps of action-types 'OnDuty','OffDuty' and 'Login'"},
        weather:{title1:"Weather",title2: "National Weather Service (Hourly)"}
    },

    parameters: {

    //Dates
        AC_DateReceivedLo: {
            type: "datetime",
            value: [],
            loHi: true,
            oldvalue: [],
            label1: "Date Range",
            label2: "MM/dd/yyyy hh:mm:ss",
            section: "dates"
        },
        AC_DateReceivedHi: {
            type: "datetime",
            value: [],
            loHi: true,
            oldvalue: [],
            label1: "Date Range",
            label2: "MM/dd/yyyy hh:mm:ss",
            section: "dates"
        },
        AC_HourOfDayLo: {
            type: "time",
            value: [],
            loHi: true,
            label1: "Hour of Day",
            label2: "HH:MM",
            section: "dates"
        },
        AC_HourOfDayHi: {
            type: "time",
            value: [],
            loHi: true,
            label1: "Hour of Day",
            label2: "HH:MM",
            section: "dates"
        },
        AC_DateReceivedPast1Years: {
            type: "boolean",
            value: false,
            label1: "Past 1 Year",
            label2: "(Now - 365 Days)",
            section: "dates"
        },
        AC_DateReceivedPast2Years: {
            type: "boolean",
            value: false,
            label1: "Past 2 Years",
            label2: "(Now - 730 Days)",
            section: "dates"
        },
        AC_DateReceivedPast1Months: {
            type: "boolean",
            value: true,
            label1: "Past 1 Month",
            label2: "(Today's-Date-Last-Month to Now)",
            section: "dates"
        },
        AC_DateReceivedPast6Months: {
            type: "boolean",
            value: false,
            label1: "Past 6 Months",
            label2: "(Today's-Date-6-Months-Ago to Now)",
            section: "dates"
        },
        AC_DateReceivedPast24Hours:{
            type: "boolean",
            value: false,
            label1: "Past 24 Hours",
            label2: "(Now - 24 Hours)",
            section: "dates"
        },

    //Address    
        AC_IncidLocation: {
            type: "csv",
            value: [],
            label1: "Addresses",
            label2: "Comma-Separated",
            section: "address"
        },
        AC_Street: {
            type: "csv",
            value: [],
            label1: "Street(s)",
            label2: "Comma-Separated",
            section: "address"
        },                    
        AC_LandmarkType: {
            type: "multiselect",
            value: [],
            options: [],
            dropdownList: "Landmark_Types",
            label1: "Landmark Types",
            label2: "",
            section: "address"
        },
        AC_IsApartment: {
            type: "boolean",
            value: false,
            label1: "Apartment-Type Only?",
            label2: "Landmark 'Type' = 'Apartment' or 'Apartments'",
            section: "address"
        },

    //Call Types
        AC_CallClass: {
            type: "multiselect",
            value: [],
            options: [],
            dropdownList: "Call_Classes",
            label1: "Call Classes",
            label2: "(From those used in past 2 years)",
            section: "calltypes"
        },
        AC_Disposition: {
            type: "multiselect",
            value: [],
            options: [],
            dropdownList: "Disposition_Codes",
            label1: "Disposition",
            label2: "(How did the call end?)",
            section: "calltypes"
        },
        AC_Complaint: {
            type: "multiselect",
            value: [],
            options: [],
            dropdownList: "Complaint_Types",
            label1: "Complaint Type(s)",
            label2: "(From those used in past 2 years)",
            section: "calltypes"
        },
        AC_IsTrafficRelatedCall: {
            type: "boolean",
            value: false,
            label1: "Traffic-Related Calls",
            label2: "ACC MINORACC,RESCUE,MAJOR ACC,TRHZ TRAFFIC",
            section: "calltypes"
        },
        AC_PriorityLo: {
            type: "integer",
            value: [],
            loHi: true,
            label1: "Priority",
            label2: "1,2,3,4,9",
            section: "calltypes"
        },
        AC_PriorityHi: {
            type: "integer",
            value: [],
            loHi: true,
            label1: "Priority",
            label2: "1,2,3,4,9",
            section: "calltypes"
        },
        AC_CallNumber: {
            type: "csv",
            value: [],
            label1: "Call Number(s)",
            label2: "Comma-Separated",
            section: "calltypes"
        },                  
    
    //Calls Holding    
        AC_MinutesHoldingLo: {
            type: "integer",
            value: [],
            loHi: true,
            label1: "Minutes Holding",
            label2: "",
            section: "callsholding"
        },
        AC_MinutesHoldingHi: {
            type: "integer",
            value: [],
            loHi: true,
            label1: "Minutes Holding",
            label2: "",
            section: "callsholding"
        },

    //Response Times
        AC_RTRecToOnsLo: {
            type: "integer",
            value: [],
            loHi: true,
            label1: "REC to ONS",
            label2: "Received to Onscene",
            section: "resptimes"
        },
        AC_RTRecToOnsHi: {
            type: "integer",
            value: [],
            loHi: true,
            label1: "REC to ONS",
            label2: "Received to Onscene",
            section: "resptimes"
        },
        AC_RTDisToOnsLo: {
            type: "integer",
            value: [],
            loHi: true,
            label1: "DIS to ONS",
            label2: "Dispatched to Onscene",
            section: "resptimes"
        },
        AC_RTDisToOnsHi: {
            type: "integer",
            value: [],
            loHi: true,
            label1: "DIS to ONS",
            label2: "Dispatched to Onscene",
            section: "resptimes"
        },

    //Geographic
        AC_InCastleHills: {
            type: "boolean",
            value: false,
            label1: "In Castle Hills Only?",
            label2: "IRAs 640,641,642,643,644,645,646,647, 648,804,805",
            section: "geographic",
            mapService: "https://adaptergis.cityoflewisville.com/arcgis/rest/services/GEM/GEM_CastleHills/MapServer",
            mapServiceActive: false
        },
        AC_InOldTownOnly: {
            type: "boolean",
            value: false,
            label1: "In Old Town Only?",
            label2: "",
            section: "geographic",
            mapService:''
        },
        AC_InMultiFamilyZoning:{
            type: "boolean",
            value: false,
            label1: "In Multi-Family Zoning?",
            label2: "MF1,MF2,MF3",
            section: "geographic"
        },
        AC_FireDistrict:{
            type: "multiselect",
            value: [],
            options: [],
            dropdownList: "Fire_Districts",
            label1: "Fire District(s)",
            label2: "",
            section: "geographic",
            mapService: "https://adaptergis.cityoflewisville.com/arcgis/rest/services/PublicSafety/Fire_Response_Districts/MapServer",
            mapServiceActive: false
        },

    //Mutual Aid
        AC_IncludesMAFireUnits: {
            type: "boolean",
            value: false,
            label1: "Only calls that included Mutual Aid Fire Units?",
            label2: "",
            section: "mutualaid"
        },
        AC_MAFireUnitsWasFirstOns: {
            type: "boolean",
            value: false,
            label1: "Only calls where mutual aid Fire Unit was 1st ONS?",
            label2: "",
            section: "mutualaid"
        },

    //Other
        AC_IncludeTrafficStop: {
            type: "boolean",
            value: false,
            label1: "Include 'Traffic Stop' calls?",
            label2: "",
            section: "other"
        },
        AC_IncludeTrafficSpecAssign: {
            type: "boolean",
            value: false,
            label1: "Include 'Traffic Special Assign.' calls?",
            label2: "",
            section: "other"
        },      
        AC_NoUnitsAvailNotes: {
            type: "boolean",
            value: false,
            label1: "Only calls with 'No unit avail' Notes?",
            label2: "",
            section: "other"
        },
        AC_NotesSearch: {
            type: "text",
            value: [],
            label1: "Narrative Search",
            label2: "Wild card (%) supported",
            section: "other"
        },

    //Units Responding
        AC_FirstUnit_FD: {
            type: "multiselect",
            value: [],
            options: [],
            dropdownList: "Units_FD",
            label1: "First FD Unit(s) On-Scene",
            label2: "",
            section: "unitsresponding",
            oppositeParameter: {
                include: false, 
                name:"AC_NotFirstUnit_FD"
            }
        },
        AC_NotFirstUnit_FD: {
            type: "multiselect",
            value: [],
            options: [],
            dropdownList: "Units_FD",
            label1: "Not the First FD Unit(s) On-Scene",
            label2: "",
            section: "unitsresponding",
            oppositeParameter: {
                include: false, 
                name:"AC_FirstUnit_FD"
            }
        },
        AC_UnitsPD: {
            type: "multiselect",
            value: [],
            options: [],
            dropdownList: "Units_PD",
            label1: "Includes these PD Units",
            label2: "",
            section: "unitsresponding"
        },
        AC_UnitsFD: {
            type: "multiselect",
            value: [],
            options: [],
            dropdownList: "Units_FD",
            label1: "Includes these FD Units",
            label2: "",
            section: "unitsresponding"
        },
        AC_UnitsFDNot: {
            type: "multiselect",
            value: [],
            options: [],
            dropdownList: "Units_FD",
            label1: "Doesn't Include these FD Units",
            label2: "",
            section: "unitsresponding"
        },
        AC_PDUnitsCountLo: {
            type: "integer",
            value: [],
            loHi: true,
            label1: "Min Number of PD Units Assigned",
            label2: "",
            section: "unitsresponding"
        },
        AC_PDUnitsCountHi: {
            type: "integer",
            value: [],
            loHi: true,
            label1: "Min Number of PD Units Assigned",
            label2: "",
            section: "unitsresponding"
        },
        
        AC_FDUnitsCountLo: {
            type: "integer",
            value: [],
            loHi: true,
            label1: "Min Number of FD Units Assigned",
            label2: "",
            section: "unitsresponding"
        },
        AC_FDUnitsCountHi: {
            type: "integer",
            value: [],
            loHi: true,
            label1: "Min Number of FD Units Assigned",
            label2: "",
            section: "unitsresponding"
        },
        AC_ExcludeFDOnlyCalls: {
            type: "boolean",
            value: false,
            label1: "Exclude calls where only FD responded?",
            label2: "",
            section: "unitsresponding"
        },
        AC_ExcludePDOnlyCalls: {
            type: "boolean",
            value: false,
            label1: "Exclude calls where only PD responded?",
            label2: "",
            section: "unitsresponding"
        },

    //Units on-Duty    
        AC_PatrolOnDutyLo: {
            type: "integer",
            value: [],
            loHi: true,
            label1: "Patrol Units: On-Duty",
            label2: "",
            section: "unitsavail"
        },
        AC_PatrolOnDutyHi: {
            type: "integer",
            value: [],
            loHi: true,
            label1: "Patrol Units: On-Duty",
            label2: "",
            section: "unitsavail"
        },
        AC_PatrolAvailLo: {
            type: "integer",
            value: [],
            loHi: true,
            label1: "Patrol Units: Available",
            label2: "",
            section: "unitsavail"
        },
        AC_PatrolAvailHi: {
            type: "integer",
            value: [],
            loHi: true,
            label1: "Patrol Units: Available",
            label2: "",
            section: "unitsavail"
        },
        AC_TrafficOnDutyLo: {
            type: "integer",
            value: [],
            loHi: true,
            label1: "Traffic Units: On-Duty",
            label2: "",
            section: "unitsavail"
        },
        AC_TrafficOnDutyHi: {
            type: "integer",
            value: [],
            loHi: true,
            label1: "Traffic Units: On-Duty",
            label2: "",
            section: "unitsavail"
        },
        AC_TrafficAvailLo: {
            type: "integer",
            value: [],
            loHi: true,
            label1: "Traffic Units: Available",
            label2: "",
            section: "unitsavail"
        },
        AC_TrafficAvailHi: {
            type: "integer",
            value: [],
            loHi: true,
            label1: "Traffic Units: Available",
            label2: "",
            section: "unitsavail"
        },
        
    //Weather  
        AC_WeatherConditions: {
            type: "multiselect",
            value: [],
            options: [],
            dropdownList: "Weather_Conditions",
            label1: "Weather Conditions",
            label2: "NWS Hourly",
            section: "weather"
        },
        AC_WeatherWasRaining: {
            type: "boolean",
            value: false,
            label1: "Was Raining?",
            label2: "IN('rain','snow','drizzle')",
            section: "weather"
        },
        AC_WeatherWasNotRaining: {
            type: "boolean",
            value: false,
            label1: "Was Not Raining?",
            label2: "Not IN('rain','snow','drizzle')",
            section: "weather"
        },
        AC_WeatherWasBelowFreezing: {
            type: "boolean",
            value: false,
            label1: "Was Below Freezing?",
            label2: "Temperature < 32F",
            section: "weather"
        },
        AC_WeatherTempLo: {
            type: "integer",
            value: [],
            loHi: true,
            label1: "Temperature",
            label2: "",
            section: "weather"
        },
        AC_WeatherTempHi: {
            type: "integer",
            value: [],
            loHi: true,
            label1: "Temperature",
            label2: "",
            section: "weather"
        }
    },

    schema:{
        Id: {
            type:"integer",
            th:"Row",
            tooltip: "Generic row id",
            align:"center",
            thGroup:"",
            width: "80",
            visible: false,
            parameters:[]
        },
        Call_Number: {
            type:"string",
            th:"Call Number",
            tooltip: "Call Number",
            align:"center",
            thGroup:"",
            width: "80",
            parameters:["AC_CallNumber"]
        },
        Complaint: {
            type:"string",
            th:"Complaint",
            tooltip: "Complaint Code",
            align:"left",
            thGroup:"",
            width: "80",
            parameters:["AC_Complaint","AC_IsTrafficRelatedCall"]
        },  
        Date_Received: {
            type:"datetime",
            th:"Date Received",
            tooltip: "Date /time call was received",
            align:"center",
            thGroup:"",
            width: "100",
            parameters:["AC_DateReceivedLo","AC_DateReceivedHi","AC_DateReceivedPast1Years","AC_DateReceivedPast2Years","AC_DateReceivedPast1Months","AC_DateReceivedPast6Months"]
        },
        Actual_Incid_Location: {
            type:"string",
            th:"Address",
            tooltip: "Incident address and landmark-name",
            align:"left",
            thGroup:"",
            width: "200",
            parameters:["AC_IncidLocation","AC_Street"]
        },
        LocationCount: {
            type:"integer",
            th:"Addr Count",
            tooltip: "Number of incidents at this address",
            align:"center",
            thGroup:"",
            width: "80",
            visible: false
        },
        Tract: {
            type:"string",
            th:"IRA",
            tooltip: "PD internal reporting area",
            align:"center",
            thGroup:"",
            width: "80",
            parameters:["AC_InCastleHills"]
        },
        Disp_Zone: {
            type:"string",
            th:"PD Dist",
            tooltip: "Police District",
            align:"center",
            thGroup:"",
            width: "80",
        },
        Internal_ESN: {
            type:"string",
            th:"FD Dist",
            tooltip: "Fire District",
            align:"center",
            thGroup:"",
            width: "80",
            parameters:["AC_FireDistrict"]
        },
        Call_Class: {
            type:"string",
            th:"Class",
            tooltip: "Call Class",
            align:"center",
            thGroup:"",
            width: "80",
            parameters:["AC_CallClass"]
        },
        Priority: {
            type:"integer",
            th:"Priority",
            tooltip: "Priority Level",
            align:"center",
            thGroup:"",
            width: "80",
            parameters:["AC_PriorityLo","AC_PriorityHi"]
        },                               
        First_Unit: {
            type:"string",
            th:"First Unit",
            tooltip: "First unit on-scene",
            align:"center",
            thGroup:"",
            width: "80",
            parameters:["AC_FirstUnit_FD","AC_NotFirstUnit_FD"]
        },      
        Departments: {
            type:"string",
            th:"Depts",
            tooltip: "Departments involved in this call",
            align:"center",
            thGroup:"",
            width: "80",
            parameters:["AC_ExcludeFDOnlyCalls","AC_ExcludePDOnlyCalls"]
        },  
        Dispositions: {
            type:"string",
            th:"Disp",
            tooltip: "Call disposition code(s)",
            align:"center",
            thGroup:"",
            width: "80",
            parameters:["AC_Disposition"]
        },  
        NoteSearchSnippet: {
            type:"string",
            th:"Note Search",
            tooltip: "Snippet of narrative that includes your search term",
            align:"left",
            thGroup:"",
            width: "80",
            parameters:["AC_NotesSearch"]
        },
        PDUnitsCount: {
            type: "integer",
            th:"PD",
            tooltip: "Number of Police units that responded",
            align:"center",
            thGroup:"Unit Count",
            width: "80",
            parameters:["AC_PDUnitsCountLo","AC_PDUnitsCountHi"]
        },
        FDUnitsCount: {
            type:"integer",
            th:"FD",
            tooltip: "Number of Fire units that responded",
            align:"center",
            thGroup:"Unit Count",
            width: "80",
            parameters:["AC_FDUnitsCountLo","AC_FDUnitsCountHi"]
        },
        MinutesHolding: {
            type:"decimal",
            th:"Min Holding",
            tooltip: "Minutes between time-received and time-dispatched",
            align:"center",
            thGroup:"Resp Time",
            width: "80",
            parameters:["AC_MinutesHoldingLo","AC_MinutesHoldingHi"]
        }, 
        RTRecToOns: {
            type:"decimal",
            th:"REC to ONS",
            tooltip: "Minutes between time-received to first-unit on-scene",
            align:"center",
            thGroup:"Resp Time",
            width: "80",
            parameters:["AC_RTDisToOnsLo","AC_RTDisToOnsHi"]
        },
        RTDisToOns: {
            type:"decimal",
            th:"DIS to ONS",
            tooltip: "Minutes between time-dispatched to first-unit on-scene",
            align:"center",
            thGroup:"Resp Time",
            width: "80",
            parameters:["AC_RTRecToOnsLo","AC_RTRecToOnsHi"]
        },
        Time_Dispatched: {
            type:"datetime",
            th:"Time DIS",
            tooltip: "Date/time call was dispatched",
            align:"center",
            thGroup:"Call Times",
            width: "80",
            parameters:[]
        },
        Time_Onscene: {
            type:"datetime",
            th:"Time ONS",
            tooltip: "Date/time first-unit was on-scene",
            align:"center",
            thGroup:"Call Times",
            width: "80",
            parameters:[]
        },
        Time_Complete: {
            type:"datetime",
            th:"Time COM",
            tooltip: "Date/time call was marked 'complete'",
            align:"center",
            thGroup:"Call Times",
            width: "80",
            parameters:[]
        },
        WX_Temperature: {
            type:"integer",
            th:"Temp",
            tooltip: "NWS-Temperature at the nearest hour to time-received",
            align:"center",
            thGroup:"Weather",
            width: "80",
            parameters:["AC_WeatherTempLo","AC_WeatherTempHi"]
        },
        WX_ConditionSummary: {
            type:"string",
            th:"Conds",
            tooltip: "NWS condition-statement at the nearest hour to time-received",
            align:"left",
            thGroup:"Weather",
            width: "80",
            parameters:["AC_WeatherConditions","AC_WeatherWasRaining","AC_WeatherWasNotRaining"]
        },
        PatrolOnDuty: {
            type:"integer",
            th:"OD",
            tooltip: "Number of patrol units on-duty. From Unit-Log. Based on timestamps of action-types 'OnDuty','OffDuty' and 'Login'",
            align:"center",
            thGroup:"Patrol",
            width: "80",
            parameters:["AC_PatrolOnDutyLo","AC_PatrolOnDutyHi"]
        },
        PatrolAvail: {
            type:"integer",
            th:"AV",
            tooltip: "Number of patrol units on-duty and not assigned to a call. From Unit-Log. Based on timestamps of action-types 'OnDuty','OffDuty' and 'Login'",
            align:"center",
            thGroup:"Patrol",
            width: "80",
            parameters:["AC_PatrolAvailLo","AC_PatrolAvailHi"]
        },
        PatrolNotAvail: {
            type: "integer",
            th:"NA",
            tooltip: "Number of patrol assigned to a call. From Unit-Log. Based on timestamps of action-types 'OnDuty','OffDuty' and 'Login'",
            align:"center",
            thGroup:"Patrol",
            width: "80",
            parameters:[]
        },
        TrafficOnDuty: {
            type:"integer",
            th:"OD",
            tooltip: "Number of traffic units on-duty. From Unit-Log. Based on timestamps of action-types 'OnDuty','OffDuty' and 'Login'",
            align:"center",
            thGroup:"Traffic",
            width: "80",
            parameters:["AC_TrafficOnDutyLo","AC_TrafficOnDutyHi"]
        },
        TrafficAvail: {
            type:"integer",
            th:"AV",
            tooltip: "Number of traffic units on-duty and not assigned to a call. From Unit-Log. Based on timestamps of action-types 'OnDuty','OffDuty' and 'Login'",
            align:"center",
            thGroup:"Traffic",
            width: "80",
            parameters:["AC_TrafficAvailLo","AC_TrafficAvailHi"]
        },
        TrafficNotAvail: {
            type:"integer",
            th:"NA",
            tooltip: "Number of patrol assigned to a call. From Unit-Log. Based on timestamps of action-types 'OnDuty','OffDuty' and 'Login'",
            align:"center",
            thGroup:"Traffic",
            width: "80",
            parameters:[]
        }
    }
}
})()