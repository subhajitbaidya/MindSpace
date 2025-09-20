import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function SummaryCard() {
  return (
    <Card
      sx={{
        width: "100%",
        minHeight: 260,
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 3,
        transition: "transform 0.3s",
        "&:hover": { transform: "translateY(-8px)" },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          width: "auto",
          alignSelf: "flex-start",
        }}
      >
        <Typography variant="h5" component="div">
          Preface
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "text.primary",
            lineHeight: 1.6,
            textAlign: "justify",
          }}
        >
          In Atomic Habits, James Clear, a researcher of how humans form habits,
          gives readers advice on breaking any habit which negatively affects
          them—such as procrastinating or succumbing to an addiction—as well as
          replacing it with a positive habit, such as working efficiently or
          abstaining from an addiction. He claims that if the reader often
          displays negative habitual behavior, it is not caused by "you"—in that
          "you" specifically are inherently predisposed to perpetuating the
          habit, as the reader may believe—but rather by "your system": the
          reader's network of previously self-imposed mental barriers which now
          prevent the personal growth they need to break the habit. Clear writes
          that this "system" can also prevent the reader from naturally
          displaying positive habitual behavior, but says that they can break
          their system down over time.
        </Typography>
      </CardContent>
    </Card>
  );
}
