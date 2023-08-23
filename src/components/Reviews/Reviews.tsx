import React, { useState } from 'react'
import {
    Button,
    Card,
    CardContent,
    TextField,
    TextareaAutosize,
    Typography,
} from '@mui/material'
import './Reviews.scss'
import human1 from 'assets/human 1.png'
import human2 from 'assets/human 2.png'
import human3 from 'assets/human 3.png'

type Props = {}

type Reviews = {
    name: string
    text: string
    photo: string
}

const Reviews = (props: Props) => {
    const arrReviews: Reviews[] = [
        {
            name: 'Tom',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Iaculis urna id volutpat lacus. Magna eget est lorem ipsum dolor sit amet. Donec et odio pellentesque diam volutpat commodo sed egestas egestas.',
            photo: human1,
        },
        {
            name: 'Andrew',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum eu facilisis sed odio morbi quis commodo odio. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Ornare lectus sit amet est placerat in egestas. Lectus proin nibh nisl condimentum id venenatis a condimentum.',
            photo: human3,
        },
        {
            name: 'Anna',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed pulvinar proin gravida hendrerit. Eu non diam phasellus vestibulum lorem sed risus ultricies. Id neque aliquam vestibulum morbi. Nam aliquam sem et tortor consequat id porta nibh.',
            photo: human2,
        },
    ]

    const [review, setReviews] = useState<Reviews[]>(arrReviews)

    const [newReview, setNewReview] = useState<Reviews>({
        name: '',
        text: '',
        photo: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    return (
        <div>
            <Typography variant="h4" component={'h2'}>
                Коментарі
            </Typography>
            {review.map(({ name, text, photo }, i) => (
                <Card
                    variant="outlined"
                    sx={{
                        margin: '30px 0',
                    }}
                    key={i}
                >
                    <CardContent>
                        <div className="review-header">
                            <img
                                src={photo}
                                alt={`${name}'s photo`}
                                className="review-photo"
                            />
                            <div>{name}:</div>
                        </div>
                        <div>{text}</div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default Reviews
