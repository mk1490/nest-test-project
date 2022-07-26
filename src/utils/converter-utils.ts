import {Injectable} from "@nestjs/common";

@Injectable()
export class ConverterUtils {
    convertPersianDigitToLatinDigit(persianDigitChars: string) {
        // @ts-ignore
        return persianDigitChars.replace(/[٠-٩]/g, d => "٠١٢٣٤٥٦٧٨٩".indexOf(d)).replace(/[۰-۹]/g, d => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
    }

}
