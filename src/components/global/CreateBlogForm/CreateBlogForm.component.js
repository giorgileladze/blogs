import Input from "../../common/Input"
import { useDropzone } from 'react-dropzone';
import folderAddIcon from "../../../assets/icons/folder-add.png"
import Categories from "../../common/Categories"
import { useState } from "react";
import arrowDown from "../../../assets/icons/arrow-down.png"
import errorInfoImg from "../../../assets/icons/info-circle.svg"
import Button from "../../common/Button";

const CreateBlogFormComponent = (props) => {
    const [isMultiselectOpen, setIsMultiselectOpen] = useState(false);

    const {
        categories,
        selectCategory,
        removeCategory,
        selectedCategories,
        setEmail,
        setAuthor,
        setDescription,
        setDate,
        setTitle,
        email,
        isValid,
        handleSubmit,
        setImage
    } = props;

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => {
            setImage(acceptedFiles);
          },
    });
      
    return (
        <div className="w-[800px] text-text-primary mx-auto">
            <h1 className="font-bold text-[32px] leading-[40px]">ბლოგის დამატება</h1>
            <form onSubmit={(e) => {handleSubmit(e)}}>
                <div>
                    <label>ატვირთეთ ფოტო *</label>
                    <div className="h-[180px] bg-[#F4F3FF] hover:bg-[#F1EFFB] cursor-pointer border border-dashed border-[#85858D] rounded-xl" {...getRootProps()}>
                        <Input {...getInputProps()} />
                        <div className="flex flex-col pt-12 gap-6">
                            <img className="mx-auto" src={folderAddIcon} alt="folderAddIcon" />
                            <p className="mx-auto font-normal text-sm">ჩააგდეთ ფაილი აქ ან <strong className="underline">აირჩიეთ ფაილი</strong></p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        <label htmlFor="author">ავტორი *</label>
                        <Input onChange={(e) => {setAuthor(e.target.value)}} placeholder="შეიყვანეთ ავტორი" className="placeholder:text-[14px] w-[388px]" name="author" id="author" type="text" validations={[
                            {
                                regex: /^.{4,}$/,
                                text: "მინიმუმ 4 სიმბოლო"
                            },
                            {
                                regex: /^(\S+\s+){1,}\S+$/,
                                text: "მინიმუმ ორი სიტყვა"
                            },
                            {
                                regex: /^[ა-ჰ\s|]+$/u,
                                text: "მხოლოდ ქართული სიმბოლოები"
                            }
                        ]}/>
                    </div>
                    <div>
                        <label htmlFor="title">სათაური *</label>
                        <Input onChange={(e) => {setTitle(e.target.value)}} placeholder="შეიყვანეთ სათაური" className="placeholder:text-[14px] w-[388px]" name="title" id="title" type="text" validations={[
                            {
                                regex: /^.{4,}$/,
                                text: "მინიმუმ 4 სიმბოლო"
                            }
                        ]}/>
                    </div>
                </div>
                <div>
                    <label htmlFor="description">აღწერა *</label>
                    <Input onChange={(e) => {setDescription(e.target.value)}} placeholder="შეიყვანეთ აღწერა" className="placeholder:text-[14px] h-[124px]" name="description" id="description" type="text" validations={[
                        {
                            regex: /^.{4,}$/,
                            text: "მინიმუმ 4 სიმბოლო"
                        }
                    ]}/>
                </div>
                <div className="flex justify-between">
                    <div>
                        <label htmlFor="date">გამოქვეყნების თარიღი *</label>
                        <Input onChange={(e) => {setDate(e.target.value)}} className="w-[388px]" name="date" id="date" type="date" />
                    </div>
                    <div className="w-[388px]">
                        <label>კატეგორია</label>
                        <div 
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsMultiselectOpen(prev => !prev);
                            }}
                            className="h-10 flex w-full border border-[#E4E3EB] bg-[#FCFCFD] hover:bg-[#F9F9FA] rounded-xl">
                                <div className="w-[348px] h-12 flex p-[6px] overflow-hidden mb-2 overflow-x-auto whitespace-nowrap gap-2 categories-scrollbar">
                                    {categories.filter(cat => selectedCategories.includes(cat.id)).map((category, i) => {
                                        return (
                                                <span
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <Categories key={`${i}-1`} onClick={() => removeCategory(+category.id)}
                                                        category={category} 
                                                    />
                                                </span>
                                        );
                                    })}
                                </div>
                                <div className={`w-10 flex cursor-pointer`}>
                                    <img className="m-auto" src={arrowDown} alt="arrowDown" />
                                </div>
                        </div>
                        <div className={`p-4 gap-2 absolute w-[388px] border border-[#E4E3EB] flex flex-wrap shadow-xl rounded-xl ${!isMultiselectOpen && "hidden"}`}>
                            {categories.filter(cat => !selectedCategories.includes(cat.id)).map((category, i) => {
                                return ( 
                                        <Categories key={`${i}-2`} onClick={(val) => selectCategory(+val)}  
                                        category={category} 
                                        />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="email">ელ-ფოსტა *</label>
                    <Input onChange={(e) => {setEmail(e.target.value)}} className="w-[388px]" name="email" id="email" type="text" />
                    <div className={`text-text-error flex text-[12px] leading-5 gap-2 ${!email || /^[a-zA-Z0-9.]+@redberry\.ge$/.test(email) ? "hidden" : ""}`}>
                        <img src={errorInfoImg} alt="infoCircle"/>
                        <p>მეილი უნდა მთავრდებოდეს @redberry.ge-ით</p>
                    </div>
                </div>

                <div>
                    <Button type="submit" disabled={!isValid}>გამოქვეყნება</Button>
                </div>
            </form>
        </div>
    );
}

export default CreateBlogFormComponent;