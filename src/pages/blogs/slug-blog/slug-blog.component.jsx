import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

import Repository from '../../../repositories/factory/RepositoryFactory';
import { useParams } from 'react-router';

const BusinessObjectRepository = Repository.get('businessObject');

const SlugBlog = () => {
  const { blogTitle } = useParams();
  const [showLoading, setShowLoading] = useState(true);
  const navigate = useNavigate();
  // blogs
  const [blog, setBlog] = useState({});

  const fetchBlog = async () => {
    if (!blogTitle) navigate('/');
    setShowLoading(true);
    try {
      const { data } = await BusinessObjectRepository.get({
        business_object_type: 'blog',
        slug: blogTitle,
      });

      if (!data.length) navigate('/dashboard/blogs');
      setShowLoading(false);
      setBlog(data[0]);
    } catch (err) {
      console.error('Error fetch Blog: ', err);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <>
      {showLoading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <div className="container" dangerouslySetInnerHTML={{ __html: blog.content }} />
      )}
    </>
  );
};

export default React.memo(SlugBlog);
