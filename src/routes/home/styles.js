const styles = {
  homeContainer: {
    py: 4,
  },
  innerContainer: {
    mt: 2,
  },
  button: {
    borderRadius: "32px",
    color: "#31383f",
    px: 2,
    py: 1,
    width: 150,
    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;",
  },
  createGameButton: {
    bgcolor: "rgba(221, 142, 164, 0.5)",
    "&:hover": {
      bgcolor: "rgba(221, 142, 164, 1)",
    },
  },
  joinGameButton: {
    bgcolor: "rgba(254, 221, 137, 0.5)",
    "&:hover": {
      bgcolor: "rgba(254, 221, 137, 1)",
    },
  },
};

export default styles;
