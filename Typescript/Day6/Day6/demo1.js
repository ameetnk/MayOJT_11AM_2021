// json
// store data in key & value format
var obj = {
    fname: "Sumit",
    "lname": 'Raokhande',
    id: 8
};
//1 dot operator
// 2 square operator
// console.log(`
//     First Name :: ${obj.fname}
//     Last Name   :: ${obj.lname}
//     ID          :: ${obj.id}
// `);
//2 square operator
// console.log(`
//     First name  :: ${obj["fname"]}
//     Last Name   :: ${obj['lname']}
//     ID          :: ${obj["id"]}
// `);
// Array of Object
var arrobj = [
    {
        fname: "Sumit",
        "lname": 'Raokhande',
        id: 8,
        month: ["Jan", "Feb", "March"],
        address: {
            area: 'Ambegaon',
            pincode: 411046,
            city: 'Pune'
        },
        result: [
            {
                subj: "Maths",
                marks: 65
            },
            {
                subj: "Analog Circuit",
                marks: 55
            },
            {
                subj: "Operating System",
                marks: 40
            }
        ]
    },
    {
        fname: "Kiran",
        "lname": 'Raokhande',
        id: 6,
        month: ["Jan", "Feb", "March"],
        address: {
            area: 'Ambegaon',
            pincode: 411046,
            city: 'Pune'
        },
        result: [
            {
                subj: "Maths",
                marks: 65
            },
            {
                subj: "Analog Circuit",
                marks: 55
            },
            {
                subj: "Operating System",
                marks: 40
            }
        ]
    },
    {
        fname: "Spruha",
        "lname": 'Raokhande',
        id: 3,
        month: ["Jan", "Feb", "March"],
        address: {
            area: 'Ambegaon',
            pincode: 411046,
            city: 'Pune'
        },
        result: [
            {
                subj: "Maths",
                marks: 65
            },
            {
                subj: "Analog Circuit",
                marks: 55
            },
            {
                subj: "Operating System",
                marks: 40
            }
        ]
    }
];
// console.log(`
//     First Name  ::${arrobj[1].fname}
//     Last Name   ::${arrobj[1].lname}
//     ID          ::${arrobj[1].id}
// `)
// console.log(arrobj[1]);
// console.log(arrobj);
for (var i = 0; i < arrobj.length; i++) {
    console.log("\n    First Name  ::" + arrobj[i].fname + "\n    Last Name   ::" + arrobj[i].lname + "\n    ID          ::" + arrobj[i].id + "\n    Month       ::" + arrobj[i].month.join(" ") + "\n    ---------Address-------------------\n    Area        ::" + arrobj[i].address.area + "\n    Pincode     ::" + arrobj[i].address.pincode + "\n    City        ::" + arrobj[i].address.city + "\n");
    for (var j = 0; j < arrobj[i].result.length; j++) {
        console.log("\n         ===========Result============\n         Subject    :: " + arrobj[i].result[j].subj + "\n         Marks      :: " + arrobj[i].result[j].marks + "   \n        ");
    }
}
