import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Button, Card, Input, Label } from "../components/ui";
import { useVoteContext } from "../context/voteContext";

import { useForm } from "react-hook-form";
dayjs.extend(utc);

export function VotesFormPage() {
  const { createVote, getVote, updateVote } = useVoteContext();
  const navigate = useNavigate();
  const params = useParams();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (params.id) {
        updateVote(params.id, {
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      } else {
        createVote({
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      }

      navigate("/votes");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const loadVote = async () => {
      if (params.id) {
        const vote = await getVote(params.id);
        setValue("title", vote.title);
        setValue("description", vote.description);
        setValue(
          "date",
          vote.date ? dayjs(vote.date).utc().format("YYYY-MM-DD") : ""
        );
        setValue("completed", vote.completed);
      }
    };
    loadVote();
  }, []);

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          name="title"
          placeholder="Title"
          {...register("title")}
          autoFocus
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">Please enter a title.</p>
        )}

        <Label htmlFor="description">Description</Label>
        <Textarea
          name="description"
          id="description"
          rows="3"
          placeholder="Description"
          {...register("description")}
        ></Textarea>

        <Label htmlFor="date">Date</Label>
        <Input type="date" name="date" {...register("date")} />
        <Button>Save</Button>
      </form>
    </Card>
  );
}