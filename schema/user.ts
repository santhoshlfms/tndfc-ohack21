import { array, number, object, string, TypeOf, date, mixed } from 'yup';
var moment = require('moment');

export const userSchema = object({
    mobileNo: string().required().min(10),
    status: mixed().oneOf(['NEW', 'APPROVED', 'DECLINED', 'MOREINFO']),
    userInfo: object({
        name: string().required().min(3),
        fatherName: string().required().min(3),
        motherName: string().required().min(3),
        guardianName: string().optional().min(3),
        wifeName: string().optional().min(3),
        husbandName: string().optional().min(3),
        applications: string(),
        relationshipWithGuardian: string().optional(),
        address: object({
            line1: string().optional(),
            line2: string().optional(),
            line3: string().optional(),
            city: string().optional(),
            district: string().optional(),
            state: string().optional(),
            country: string().optional(),
            pinCode: string().optional()
        }).default(undefined),
        aadharNo: string().optional(),
        panNo: string().optional(),
        voterId: string().optional(),
        disabledGovernmentId: string().optional(),
        rationCard: string().optional(),
        sex: string().optional(),
        education: string().optional(),
        bloodGroup: string().optional(),
        dob: date().optional().default(function () {
            return moment().format("DD/MM/YYYY");
          }).optional(),
        disability: string().optional(),
        natureOfDisability: string().optional(),
        documents: string().optional()
        
    })})

export type User = TypeOf<typeof userSchema>;
