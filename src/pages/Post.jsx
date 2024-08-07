// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { postCompany } from '../store/slice/companySlice'
import { useNavigate } from 'react-router-dom'
import { usePostCompanyMutation } from '../store/slice/companyApi'

const Post = () => {

    // const dispatch = useDispatch()
    // const companyState = useSelector((state) => state.company)
    const navigate = useNavigate()
    // const onSubmit = async (e) => {
    //     e.preventDefault();
    //     const name = e.target.name.value
    //     const description = e.target.description.value
    //     const website = e.target.website.value
    //     const logo = e.target.logo.value

    //     try {
    //         await dispatch(postCompany({ name, description, website, logo }))
    //         navigate("/")
    //     } catch (error) {
    //         console.log(error)
    //     }


    // };

    const [postCompany,
        {
            isLoading, isError
        }
    ] = usePostCompanyMutation()
    const onSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const description = e.target.description.value
        const website = e.target.website.value
        const logo = e.target.logo.value
        postCompany({ name, description, website, logo }),
            navigate("/")

    };

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <h1>Error</h1>
    }



    return (
        <div className='flex justify-center items-center h-screen  w-full' >
            <div className='flex flex-col gap-3 w-1/2 p-5 items-center justify-center  border'>
                <form className='flex flex-col gap-3 '
                    id='post-company'
                    onSubmit={onSubmit}
                >
                    <input type="text"
                        placeholder="Company Name"
                        className="input input-bordered w-full max-w-xs"
                        id='name'
                    />
                    <input type="text"
                        placeholder="description"
                        className="input input-bordered w-full max-w-xs"
                        id='description'
                    />
                    <input type="text"
                        placeholder="Companywebsite"
                        className="input input-bordered w-full max-w-xs"
                        id='website'
                    />
                    <input type="text"
                        placeholder="Company logo"
                        className="input input-bordered w-full max-w-xs"
                        id='logo'
                    />
                </form>
                <button type="submit" form="post-company" className='border rounded-md p-2 mt-3'>Submit</button>
            </div>
        </div>

    )
}

export default Post
