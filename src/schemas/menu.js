import * as Yup from "yup";

export const addmenus=Yup.object({
    Breakfast:Yup.string().min(3,"Breakfast Must Be Atleast 2 Characters").max(255).required('Breakfast is required'),
    Lunch:Yup.string().min(3,"Lunch Must Be Atleast 2 Characters").max(255).required("Lunch  is required"),
    Dinner:Yup.string().min(3,"Dinner Must Be Atleast 2 Characters").max(255).required("Dinner  is required"),
})