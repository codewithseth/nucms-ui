import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import usePost from '../../cms/pages/post/core/action';
import Header from './components/Header';
import Footer from './components/Footer';
import CustomCardNgo from '../../../../_timouy/helpers/components/CustomCardNgo';
import no_thumbnail from "../../../../_timouy/assets/images/place-holder/no-thumbnail.jpg";
import moment from 'moment';
import SkeletonFourCard from '../../../../_timouy/helpers/placeholder/SkeletonFourCard';

const NgoItem = () => {
    const { catid } = useParams();
    const { postsByCategory, postsByCategoryPub, loading } = useSelector(state => state.post)
    const { user } = useSelector(state => state.auth);
    const { getPostsByCategory, getPostsByCategoryPub } = usePost();

    useEffect(() => {
        if (user) {
            getPostsByCategory(catid);
        } else {
            getPostsByCategoryPub(catid);
        }
        // eslint-disable-next-line
    }, [catid]);

    const postsByCategoryList = user ? postsByCategory : postsByCategoryPub;
    const BASE_URL = process.env.REACT_APP_IMAGE_URL;

    return (
        <>
            <Header />
            <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-[40px]">
                    {loading ? (
                        <SkeletonFourCard />
                    ) : postsByCategory.length === 0 ? (
                        <div className="text-center col-span-4">
                            <p className="text-lg text-gray-500">No posts available in this category.</p>
                        </div>
                    ) : (
                        [...postsByCategoryList]
                            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                            .map((post) => {
                                const formattedDate = moment(post.createdAt).format('MMMM DD, YYYY hh:mm A');
                                return (
                                    <CustomCardNgo
                                        key={post.id}
                                        link={`/${catid}/template/ngo/${post.id}`}
                                        title={post.title}
                                        featureImage={post?.image ? `${BASE_URL}${post?.image}` : no_thumbnail}
                                        author={post.author.username}
                                        authorImg={post?.author.profileImage}
                                        date={formattedDate}
                                        article={post.categoryName}
                                    />
                                );
                            })
                    )}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default NgoItem