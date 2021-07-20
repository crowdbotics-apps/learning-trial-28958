from django.conf import settings
from django.db import models


class Input(models.Model):
    "Generated Model"
    coursename = models.CharField(
        max_length=256,
    )
    courseCapacity = models.IntegerField(
        null=True,
        blank=True,
    )
    courseParticipant = models.ManyToManyField(
        "users.User",
        blank=True,
        related_name="input_courseParticipant",
    )
