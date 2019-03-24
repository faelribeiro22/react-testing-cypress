import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  pos: {
    marginBottom: 12
  },
  posHighlight: {
    color: theme.palette.primary.main
  }
});

const MediaCard = ({
  classes,
  id,
  status,
  image,
  name,
  summary,
  progress,
  price
}) => {
  let posExtraClass, posLabel, renderActions;

  if (status === "ACTIVE") {
    if (progress && progress.length > 0) {
      const progressTotal = progress.length;
      const progressCount = progress.filter(p => p.status === "DONE").length;

      if (progressCount === progressTotal) {
        posLabel = "Concluído";
      } else if (progressCount === 0) {
        posLabel = "Não iniciado";
      } else {
        const progressPercent = Math.floor(
          (progressCount * 100) / progressTotal
        );
        posLabel = `Progresso: ${progressPercent}%`;
      }

      renderActions = (
        <CardActions>
          <Button size="small" color="primary">
            {progressCount === 0 ? "Começar" : "Continuar"}
          </Button>
        </CardActions>
      );
    } else {
      posLabel = price ? `Preço: R$ ${price}` : "Grátis";
      posExtraClass = classes.posHighlight;
      renderActions = (
        <CardActions>
          <Button size="small" color="primary">
            Saber mais
          </Button>
          <Button
            size="small"
            color="primary"
            component={Link}
            to={`/payment/course/${id}`}
          >
            Comprar
          </Button>
        </CardActions>
      );
    }
  } else {
    posLabel = "Em breve...";
    renderActions = (
      <CardActions>
        <Button size="small" color="primary">
          Saber mais
        </Button>
      </CardActions>
    );
  }

  return (
    <Card className={classes.card}>
      <CardActionArea disabled={status !== "ACTIVE"}>
        <CardMedia
          className={classes.media}
          image={`/images/${image}`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          {posLabel && (
            <Typography
              className={classNames(classes.pos, posExtraClass)}
              color="textSecondary"
            >
              {posLabel}
            </Typography>
          )}
          <Typography component="p">{summary}</Typography>
        </CardContent>
      </CardActionArea>
      {renderActions}
    </Card>
  );
};

export default withStyles(styles)(MediaCard);
