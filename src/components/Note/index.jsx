import { Container } from './styles';
import { Content } from './styles';
import { Tag } from '../Tag';
import { FiStar } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';



export function Note({ data, ...rest }) {
    return (
        <Container to="/details/1" {...rest}>
            <Content>
                <h1>{data.title}</h1>
                <div id="star">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FiStar />
                </div>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Inventore est voluptate impedit pariatur eum mollitia 
                    quae a adipisci molestias dicta exercitationem corrupti 
                    veniam commodi, aperiam minima quos, libero aut soluta.
                </p>

                {
                    data.tags &&
                    <footer>
                        {
                            data.tags.map( tag => <Tag key={tag.id} title={tag.name} />)
                        }
                    </footer>
                }
            </Content>
        </Container>
    )
}