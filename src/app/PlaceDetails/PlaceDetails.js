import { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";
import Divider from "@mui/material/Divider";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import { appContext } from "../Context";
import "./Style.scss";

const PlaceDetails = ({ place, index }) => {
  const { refsArray } = useContext(appContext);

  return (
    <Card raised className="travelAdvisor-card" ref={refsArray[index]}>
      <CardMedia
        component="img"
        height="140"
        image={
          place?.photo?.images.original.url ||
          "https://th.bing.com/th/id/R.8251900044f36cb34db8a9afd01f1348?rik=5o4C0fDfmmlOXg&pid=ImgRaw&r=0"
        }
        alt="hotel"
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {place?.name}
        </Typography>

        <Box className="placeProp" mb={1}>
          <Typography variant="body2" gutterBottom>
            Price
          </Typography>
          <Typography variant="body2">{place?.price}</Typography>
        </Box>
        <Box className="placeProp">
          <Typography variant="body2" gutterBottom>
            Rating
          </Typography>
          <Rating
            name="read_only"
            value={Math.trunc(Number(place?.rating))}
            readOnly
          />
        </Box>

        <Box className="placeProp" mb={2}>
          <Typography variant="body2" gutterBottom>
            Num Reviews
          </Typography>
          <Typography variant="body2">{place?.num_reviews}</Typography>
        </Box>
        {place?.awards?.map((award, i) => (
          <Box key={i} className="placeProp" mb={1}>
            <img src={award.images.small} alt="award" />
            <Typography variant="caption">{award.award_type}</Typography>
          </Box>
        ))}
        <Box mb={2}>
          {place?.cuisin?.map((cuisin, i) => (
            <Chip key={i}>{cuisin.name}</Chip>
          ))}
        </Box>
        <Divider mb={2} />
        {place?.address && (
          <Box className="placeProp" my={1}>
            <LocationOnIcon fontSize="small" />
            <Typography variant="subtitle2">{place?.address}</Typography>
          </Box>
        )}
        {place?.phone && (
          <Box className="placeProp" my={1}>
            <PhoneIcon fontSize="small" />
            <Typography variant="subtitle2">{place?.phone}</Typography>
          </Box>
        )}
        {place?.mail && (
          <Box className="placeProp" my={1}>
            <MailIcon fontSize="small" />
            <Typography variant="subtitle2">{place?.mail}</Typography>
          </Box>
        )}
      </CardContent>
      <CardActions>
        {place?.website && (
          <Button
            size="small"
            onClick={() => window.open(place.website, "_blank")}
          >
            Website
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;
