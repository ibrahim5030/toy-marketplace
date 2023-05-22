import useTitle from "../../hooks/useTitle";


const Blogs = () => {
    useTitle('Blogs');
    return (
        <div>
            {/* Blog Section */}
            <div className='bg-sky-800 mb-10'>
                <div className='text-center'>
                    <p className='text-white text-4xl font-bold py-28 mb-10'>Questions and Answers Blog</p>                    
                </div>                
            </div>
            
            <div className='w-3/5 mx-auto mb-32 text-sky-800'>
                <p><span className='text-xl font-bold'>Question:</span> <span>What is an access token and refresh token? How do they work and where should we store them on the client-side?</span></p>
                <p className='mb-5'><span className='text-xl font-bold'>Answer:</span> <span>Access token contains all the information the server needs to know if the user / device can access the resource you are requesting or not. They are usually expired tokens with a short validity period. The refresh token is used to generate a new access token.
                <br />                
                An access token is a tiny piece of code that contains a large amount of data. Information about the user, permissions, groups, and timeframes is embedded within one token that passes from a server to a users device.
                <br />                
                A refresh token is a special token that is used to obtain additional access tokens. This allows you to have short-lived access tokens without having to collect credentials every time one expires.
                <br />                
                On the client-side, we should store access token and refresh token in localStorage and in browser cookies. 
                </span></p>
                <p><span className='text-xl font-bold'>Question:</span> <span>Compare SQL and NoSQL databases?</span></p>
                <p className='mb-5'><span className='text-xl font-bold'>Answer:</span> <span>SQL databases are relational, and NoSQL databases are non-relational. SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</span></p>
                <p><span className='text-xl font-bold'>Question:</span> <span>What is express js? What is Nest JS?</span></p>
                <p className='mb-5'><span className='text-xl font-bold'>Answer:</span> <span>Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js. It is designed for building web applications and APIs. Nest. js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js.</span></p>
                <p><span className='text-xl font-bold'>Question:</span> <span>What is MongoDB aggregate and how does it work?</span></p>
                <p><span className='text-xl font-bold'>Answer:</span> <span>MongoDB aggregate is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</span></p>
            </div>
        </div>
    );
};

export default Blogs;