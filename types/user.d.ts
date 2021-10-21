
export default interface IUser extends TypeOf<typeof schema> {
    name: string;
    fatherName: string;
    motherName: string;
    mobileNo?: string;
    guardianName?: string;
    wifeName?: string;
    husbandName?: string;
    applications?: Array<Application>;
    relationshipWithGuardian?: string;
    address?: {
        line1: string;
        line2: string;
        line3: string;
        city: string;
        district: string;
        state: string;
        country: string;
        pinCode: string;
    };
    aadharNo?: string;
    panNo?: string;
    voterId?: string;
    disabledGovernmentId?: string;
    rationCard?: string;
    sex?: string;
    education?: string;
    bloodGroup?: string;
    dob?: string;
    disability?: boolean;
    natureOfDisability?: Array<string>;
    documents?: Array[IDocuments];
}

interface IDocuments {
    type: string;
    path: string
}

enum Application {
    PAN = "PAN",
    VOTER_ID = "VOTER_ID",
    AADHAR = "AADHAR"
}