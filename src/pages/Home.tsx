import {
  IonButton,
  IonCol,
  IonContent,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonModal,
} from "@ionic/react"
import { useState } from "react"
import "./Home.css"

const sourceData = [
  { name: "Tom", age: 16 },
  { name: "Jerry", age: 12 },
]

type TItem = {
  name: string
  age: number
}

const Home: React.FC = () => {
  const [currentLineItem, setCurrentLineItem] = useState<TItem>()

  const handleDismiss = () => {
    dismiss()
  }

  const [present, dismiss] = useIonModal(LineItemModal, {
    LineItem: currentLineItem,
    onDismiss: handleDismiss,
  })

  const onEdithandler = (item: TItem) => {
    setCurrentLineItem(item)
    present()
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Test useModal Hook</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        {sourceData.map((item) => (
          <IonRow key={item.name}>
            <IonCol>name: {item.name}</IonCol>
            <IonCol>
              <IonButton onClick={() => onEdithandler(item)}>
                Click Me
              </IonButton>
            </IonCol>
          </IonRow>
        ))}
      </IonContent>
    </IonPage>
  )
}

export default Home

type Props = {
  lineItem: TItem
  onDismiss: () => void
}
const LineItemModal: React.FC<Props> = ({ lineItem, onDismiss }) => {
  return (
    <IonContent className="ion-padding">
      <IonRow>age: {lineItem?.age}</IonRow>
      <IonButton onClick={onDismiss}>close</IonButton>
    </IonContent>
  )
}
