import './NotFoundPage.css'
import { Card, CardTitle, Container } from "react-bootstrap";

const NotFoundPage = () => {

const {t} = useTranslation()

 return (

     <Container> 
        <Card>
            <CardTitle>
            Estamos probando si esto funciona 
            </CardTitle>
        </Card>
    </Container>

 )

}

export default NotFoundPage